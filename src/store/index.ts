import { defineStore } from 'pinia';
import isEmpty from 'lodash/isEmpty';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { payEvent, beginCheckoutEvent, setUserData } from '@/utils/gtag';

import { api, saveToken, getToken, removeToken, delay, getDeviceType } from '@/utils';
import { fetchmy } from '@/utils/request';
import { stripePayUrlGet, stripePayStatusGet, logout, logFbAdd } from '@/api';

export const useStore = defineStore({
  id: 'base',
  state: () => {
    return {
      user: {} as any,
      userSelectLanguage: 'en',
      isVip: false,
    };
  },
  actions: {
    async login(jwtResponse: string) {
      const jwtParts = jwtResponse.split('.');

      if (jwtParts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      const { email, name, picture } = JSON.parse(atob(jwtParts[1]));
      // email, avatar: picture, nickname: name, google: true, type: 'pc'
      const res = await fetch(`${api}/common/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          avatar: picture,
          nickname: name,
          google: true,
          type: 'pc',
        }),
      });
      const { token, user } = await res.json();
      this.user = user;
      setUserData({ email: user.email });
      saveToken(token);
    },
    async userClickLogin(args: any) {
      const res = await fetchmy(`${api}/common/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...args,
          type: 'pc',
        }),
      });

      return res;
    },
    async getUserInfo() {
      try {
        const token = await getToken(false);
        if (!token) {
          return;
        }
        const res = await fetch(`${api}/userInfo`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/sss',
          },
        });

        if (res.status === 401) {
          removeToken();
        } else {
          const { user } = await res.json();
          const { vipEndTime } = user;
          if (vipEndTime && dayjs().isBefore(dayjs(vipEndTime))) {
            this.isVip = true;
          }
          this.user = user;
          setUserData({ email: user.email });
        }
      } catch (e) {
        //
      }
    },
    async userChangeLanguage(language: string) {
      this.userSelectLanguage = language;
    },
    async checkPayStatus(logVipId: string, token?: string) {
      if (!token) {
        token = (await getToken(false)) as string;
      }
      const { err, data = {} } = await stripePayStatusGet(logVipId, token);
      if (!err) {
        const { code, vipEndTime, vipDays, examNum, correctNum, id, amount, write, speak, type, tag } = data;
        if (code === 1) {
          await this.getUserInfo();
          payEvent(id, amount);
          this.user.vipEndTime = vipEndTime;
          if (examNum) {
            this.user.examNum = (this.user.examNum || 0) + examNum;
          }
          if (correctNum) {
            this.user.correctNum = (this.user.correctNum || 0) + correctNum;
          }
          const message = [];
          if (type === '4') {
            message.push(` ${examNum} mock exams activated successfully!`);
          } else {
            message.push(`Your Premium Plan has been activated!`);
            if (vipDays) {
              message.push(`VIP Expires at: ${dayjs(this.user.freeVipEndTime).format('YYYY-MM-DD')}`);
            }
            if (examNum) {
              message.push(`Mock Exam: ${examNum}`);
            }
            if (tag === 'Pro') {
              message.push('AI Correction: Unlimited');
            } else {
              message.push(`AI Correction: ${correctNum}`);
            }
          }

          if (message.length) {
            // ElMessage({
            //   dangerouslyUseHTMLString: true,
            //   message: message.join('<br>'),
            //   type: 'success',
            // });
            ElMessageBox.alert(`${message.join('<br>')}`, 'Purchased Successfully', {
              confirmButtonText: 'Confirm',
              dangerouslyUseHTMLString: true,
              confirmButtonClass: 'confirmBtn',
              beforeClose: () => {
                window.location.replace('/app/#/home');
              },
            });
          }
        } else {
          await delay(1000);
          await this.checkPayStatus(logVipId, token);
        }
      }
    },
    async stripePay(payload: any) {
      const token = await getToken(false);
      if (!token) {
        const router = useRouter();
        const localePath = useLocalePath();
        router.push(localePath('/login'));
        return;
      }
      const { err, data } = await stripePayUrlGet(
        { ...payload, path: 'pricing', isMobile: getDeviceType() !== 'pc' ? '1' : '0' },
        token,
      );
      if (!err) {
        const { logVipId, url } = data;

        if (url) {
          beginCheckoutEvent();
          this.checkPayStatus(logVipId, token);
          if (getDeviceType() !== 'pc') {
            window.location.href = url;
          } else {
            window.open(url, '_blank');
          }
        }
      } else {
        ElMessage({
          message: err,
          type: 'error',
        });
      }
    },
    async logout() {
      await logout();
      removeToken();
      window.location.href = '/';
    },
    async logFbAdd(fbclid?: string) {
      logFbAdd(fbclid);
    },
  },
});
