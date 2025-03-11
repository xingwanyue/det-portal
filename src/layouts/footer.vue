<script setup lang="ts"></script>

<template>
  <div class="common_footer">footer</div>
</template>
<style lang="scss" scoped>
.common_footer {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 36px;
  .footer_link_dom {
    text-align: left;
    display: flex;
    justify-content: space-between;
    @media (max-width: 496px) {
      // text-align: center;
    }
    @media (max-width: 670px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 24px;
      grid-row-gap: 24px;
    }

    .one_link_list {
      // width: auto;
      // max-width: 22%;
      .one_link_list_title {
        margin-bottom: 24px;
        font-weight: 600;
        font-size: 20px;
        color: #201515;
      }
      .one_link_list_detail {
        font-weight: 400;
        font-size: 14px;
        color: #201515;
        margin-bottom: 16px;
        line-height: 20px;
        cursor: pointer;
        max-width: 350px;

        &:hover {
          a {
            color: #f66442;
          }
        }
        &.show_more {
          text-decoration: underline !important;
          &:hover {
            color: #f66442 !important;
          }
        }
      }
      // .show_more {
      //   width: fit-content;
      //   border-bottom: 1px #201515 solid;
      //   &:hover {
      //     border-bottom: 1px #f66442 solid;
      //   }
      // }
    }
  }
  .footer_logo_dom {
    margin-top: 68px;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    align-items: center;
    justify-content: center;
    // border: 1px red solid;
    @media (max-width: 929px) {
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
    .footer_logo_left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      grid-column-gap: 20px;
      //  border: 1px red solid;
      @media (max-width: 550px) {
        grid-gap: 20px;
      }
      @media (max-width: 1009px) {
        justify-content: center;
      }
      flex-wrap: wrap;
      .footer_logo_left_left {
        // border: 1px red solid;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        grid-column-gap: 20px;
        .logo_img_out {
          width: 132px;
          height: 24px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }

          @media (max-width: 420px) {
            width: 100px;
            height: 18px;
          }
        }
        .Copyright {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
          text-align: center;
          margin-right: 22px;
        }
      }

      .logo_icon_out {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-column-gap: 8px;
        .one_icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }

          @media (max-width: 420px) {
            width: 24px;
            height: 24px;
          }
        }

        .tiktok {
          background-image: url('/img/footer/tiktok_logo.svg');
          background-size: cover;
          &:hover {
            background-image: url('/img/footer/tiktok_logo_active.svg');
          }
        }
      }
    }

    .footer_logo_right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      grid-column-gap: 24px;
      @media (max-width: 1009px) {
        justify-content: center;
      }
      @media (max-width: 668px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 24px;
      }
      .tips_out {
        font-weight: 400;
        font-size: 14px;
        color: #403f3e;
        @media (max-width: 668px) {
          text-align: center;
        }
      }
      .select_out {
      }
    }
  }

  .cookie_out {
    // border: 1px red solid;
    position: fixed;
    bottom: 17px;
    left: 16px;
    padding: 12px;
    padding-top: 18px;
    width: 320px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    .cookie_header {
      display: flex;
      justify-content: flex-end;

      img {
        cursor: pointer;
        width: 14px;
        height: 14px;
        // border: 1px red solid;
      }
    }
    .cookie_contenr {
      font-size: 14px;
      color: #201515;
      .see_cookei {
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .cookie_btn_out {
      // border: 1px red solid;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .close_btn {
        padding: 6px 12px;
        background: #f66442;
        border-radius: 20px;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        width: fit-content;
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang="scss">
.is-customized12 {
  color: white;
  background: #f66442 !important;
  .el-popper__arrow:before {
    background: #f66442 !important;
  }
}

.popover_btn {
  padding: 12px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;

  .earth_icon {
    width: 16px;
    height: 16px;
    // border: 1px red solid;
  }
  .language_font {
    font-weight: 400;
    font-size: 14px;
    color: #201515;
    margin-left: 4px;
    position: relative;
    top: -1px;
    min-width: 130px;
  }
  .arrow_icon {
    width: 16px;
    height: 16px;
    // border: 1px red solid;
    margin-left: 33px;
    transform: rotate(180deg);
  }
  &:hover {
    .arrow_icon {
      transform: rotate(0deg);
    }
  }
}
.options_out_out {
  background: #ffffff;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
  .options_out {
    background: #ffffff;
    border-radius: 4px;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 1fr 1fr;
    padding-left: 12px;
    .options_out_name {
      font-weight: 400;
      font-size: 14px;
      color: #201515;
      cursor: pointer;
      &:hover {
        color: #f66442;
      }
    }
  }
}
</style>
