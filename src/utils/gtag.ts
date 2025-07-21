// 发送注册到 google ads
// 注册成功
export const sinupEvent = () => {
  try {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11500231799/vIyZCL_G64gaEPe43usq',
    });
    window.gtag('event', 'conversion_event_signup', {
      event_timeout: 2000,
    });
  } catch (e) {
    //
  }
  return false;
};

// 开始支付
export const beginCheckoutEvent = () => {
  try {
    // window.gtag('event', 'conversion', {
    //   send_to: 'AW-998843228/75WQCM-nzpYZENzGpNwD',
    // });
    window.gtag('event', 'conversion_event_beginCheckout', {
      event_timeout: 2000,
    });
  } catch (e) {
    //
  }
  return false;
};

// 支付成功
export const payEvent = (transaction_id = '', value = 100) => {
  try {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11500231799/_6xxCMXJ-IUaEPe43usq',
      transaction_id,
      value: value / 100,
      currency: 'USD',
    });

    window.gtag('event', 'conversion_event_paid', {
      event_timeout: 2000,
    });
  } catch (e) {
    //
  }
  return false;
};

export const setUserData = async (user: any) => {
  window.gtag('set', 'user_data', {
    email: user.email,
  });
};
