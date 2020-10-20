import styled, { css } from "styled-components";
import { fonts, colors, rem, rgba } from "settings/style";

export const WrapperStyle = styled.div`
  ${({ theme }) => css`
    body {
      font-size: 20px;
      font-family: ${theme.fonts.primary};
      font-weight: 400;
      background-color: ${theme.palette.gray100};
      line-height: 23px;
      position: relative;
    }

    a {
      text-decoration: none;
      display: inline-block;

      &:hover {
        text-decoration: none;
      }
    }

    * {
      font-family: ${theme.fonts.primary};
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      line-height: 23px;
    }

    p {
      margin: 0;
    }

    input,
    button,
    textarea,
    select {
      outline: none;
    }

    .container {
      max-width: ${rem(1700)};
      padding: 0 ${rem(22)};

      ${theme.media.mq(1700)`
        max-width: ${rem(1420)};
      `}

      ${theme.media.mq(1420)`
        max-width: ${rem(1160)};
      `}

      ${theme.media.mq(1090)`
        max-width: ${rem(960)};
        padding: 0 20px;
      `}

      ${theme.media.mq(992)`
        max-width: ${rem(720)};
        padding: 0 10px;
      `}

      ${theme.media.mq(768)`
        max-width: ${rem(540)};
      `}
    }

    ///-----------------------js
    .active_acount_box {
      height: ${rem(165)} !important;
      padding: ${rem(30)} ${rem(50)} !important;
    }

    .active_gamberger_menu {
      left: 0 !important;
    }

    .active_lang_content {
      height: ${rem(105)} !important;
    }

    .body_overflow_h {
      overflow: hidden !important;
    }

    ///-----------------------golbal

    .item_main_title {
      margin-bottom: ${rem(38)};
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${theme.media.mq(425)`
        flex-direction: column;
      `}

      h3 {
        font-weight: bold;
        font-size: ${rem(30)};
        color: ${theme.palette.gray200};
        position: relative;

        ${theme.media.mq(1500)`
          font-size: ${rem(23)};
        `}

        ${theme.media.mq(425)`
          margin-bottom: ${rem(35)};
        `}

        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: ${rem(10.5)};
          width: calc(100% - 11px);
          border: ${rem(0.5)} solid rgba(${theme.palette.gray200}, 0.3);
        }
      }

      .more {
        font-weight: 500;
        font-size: ${rem(24)};
        color: ${theme.palette.gray200};
        display: flex;
        align-items: center;

        ${theme.media.mq(1500)`
          font-size: ${rem(20)};
        `}

        &::after {
          content: "\\e912";
          font-family: polgozar;
          font-size: ${rem(17)};
          margin-left: ${rem(5)};

          ${theme.media.mq(1500)`
            font-size: ${rem(15)};
          `}
        }
      }
    }

    .header_bg {
      background: ${theme.palette.gray400};
      box-shadow: 0px ${rem(6)} ${rem(14)} rgba(145, 200, 222, 0.24);
      position: relative;

      .content {
        padding: ${rem(11)} 0;

        .login_menu {
          border-bottom: unset;
          padding: 0;

          nav {
            ul {
              li {
                a {
                  color: ${theme.palette.blue100};

                  ${theme.media.mq(1090)`
                    color: ${theme.palette.gray200};
                  `}
                }
              }
            }
          }

          a {
            color: ${theme.palette.blue100};
            font-weight: 500;
          }

          .login_sign_up {
            a {
              &:first-child {
                color: ${theme.palette.blue100} !important;
              }
            }
          }
        }
      }
    }

    .intro {
      background-image: url(../img/bg/intro_bg.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: ${rem(1399)};
      position: relative;
      border-bottom: ${rem(5)} solid ${theme.palette.primary};
      margin-bottom: ${rem(42)};
      box-shadow: 0px ${rem(5)} ${rem(60)} ${rgba(theme.palette.primary, 0.7)};

      ${theme.media.mq(1400)`
        height: 105vh;
      `}

      ${theme.media.mq(960)`
        min-height: ${rem(800)};
      `}

      &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(black, rgba(#333333, 0.34px));
        z-index: 0;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        z-index: 10;
        left: 0;
        height: 100%;
        position: absolute;
        width: 100%;

        ${theme.media.mq(1000)`
          overflow: hidden;
        `}

        .center_text {
          margin-top: ${rem(407)};
          width: 100%;
          height: fit-content;
          color: ${theme.palette.white};
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;
          align-items: center;
          position: relative;

          ${theme.media.mq(1400)`
            margin-top: ${rem(228)};
          `}

          ${theme.media.mq(960)`
            margin-top: ${rem(270)};
          `}

          &::before {
            width: ${rem(990)};
            height: ${rem(1)};
            background: linear-gradient(
              to right,
              rgba(${theme.palette.white}, 0),
              rgba(${theme.palette.primary}, 0.3),
              rgba(${theme.palette.white}, 0)
            );
            content: "";
            position: absolute;
            bottom: ${rem(29)};
          }

          h2 {
            font-weight: bold;
            font-size: ${rem(35)};
            margin-bottom: ${rem(24)};

            ${theme.media.mq(720)`
              font-size: ${rem(18)};
            `}
          }

          h3 {
            font-weight: bold;
            font-size: ${rem(55)};
            margin-bottom: ${rem(79)};

            ${theme.media.mq(720)`
              font-size: ${rem(28)};
            `}

            span {
              color: ${theme.palette.primary};
            }
          }

          a {
            width: ${rem(384)};
            height: ${rem(59)};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: ${rem(35)};
            background: transparent;
            border: ${rem(1)} solid ${theme.palette.primary};
            backdrop-filter: blur(7.082779884338379px);
            --webkit-backdrop-filter: blur(7.082779884338379px);
            background-color: rgba(${theme.palette.primary}, 0.2);
            font-weight: bold;
            font-size: ${rem(25)};
            color: ${theme.palette.white};
            transition: all 0.5s;

            &:hover {
              background-color: ${theme.palette.primary};
            }

            ${theme.media.mq(720)`
              width: 40%;
            `}

            ${theme.media.mq(500)`
              width: 60%;
            `}

            ${theme.media.mq(370)`
              width: 80%;
            `}
          }
        }
      }

      .items_content {
        z-index: 10;
        position: absolute;
        display: flex;
        align-items: center;
        width: 100%;
        bottom: 0;
        height: ${rem(321)};
        background: transparent;
        opacity: 0.84;
        /* Note: currently only Safari supports backdrop-filter */
        backdrop-filter: blur(16.956499099731445px);
        --webkit-backdrop-filter: blur(16.956499099731445px);
        background-color: rgba(255, 255, 255, 0.03);
        /* (plus shape's fill blended on top as a separate layer with 7.26% opacity) */

        ${theme.media.mq(1400)`
          display: none;
        `}

        .items {
          display: flex;
          justify-content: space-between;
          margin: 0 ${rem(-19)};

          .item {
            width: calc(20% - 19px);
            margin: 0 ${rem(19)};
            height: ${rem(163)};
            transition: all linear 0.2s;
            position: relative;

            &:hover {
              margin-top: ${rem(-60)};

              ${theme.media.mq(1700)`
                margin-top: ${rem(-110)};
              `}

              .pic_box {
                box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.58);
              }

              p {
                top: 100%;
                border-radius: 0px 0px ${rem(10)} ${rem(10)};
                background: ${theme.palette.white};
                /* Note: currently only Safari supports backdrop-filter */
                backdrop-filter: blur(38.55059814453125px);
                --webkit-backdrop-filter: blur(38.55059814453125px);
                background-color: rgba(255, 255, 255, 0.16);
                /* (plus shape's fill blended on top as a separate layer with 14.91% opacity) */
              }
            }

            .pic_box {
              border-radius: ${rem(16)};
              position: relative;
              height: 100%;
              border-radius: ${rem(16)};
              overflow: hidden;
              z-index: 50;
              transition: all linear 0.3s;

              img {
                height: 100%;
                object-fit: cover;
                width: 100%;
              }

              h4 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: fit-content;
                background: transparent;
                backdrop-filter: blur(${rem(50)});
                --webkit-backdrop-filter: blur(${rem(50)});
                background-color: rgba(255, 255, 255, 0.13);
                font-weight: 300;
                font-size: ${rem(27)};
                color: ${theme.palette.white};
                padding: ${rem(7)} ${rem(24)};
                border-radius: ${rem(15)};

                ${theme.media.mq(1700)`
                  font-size: ${rem(24)};
                `}

                ${theme.media.mq(1500)`
                  font-size: ${rem(19)};
                `}
              }
            }

            p {
              padding: ${rem(25)} ${rem(14)} ${rem(3)} ${rem(5)};
              margin-top: ${rem(-10)};
              top: ${rem(10)};
              left: 0;
              font-weight: 300;
              font-size: ${rem(14)};
              color: ${theme.palette.white};
              position: absolute;
              z-index: 1;
              transition: all linear 0.5s;

              ${theme.media.mq(1700)`
                top: ${rem(3)};
              `}
            }
          }
        }
      }
    }

    .items {
      .container {
        overflow: hidden;
      }

      .content {
        padding-bottom: ${rem(44)};

        .item {
          display: flex;
          flex-direction: row;
          border-radius: ${rem(10)};
          overflow: hidden;
          background: ${theme.palette.white};
          box-shadow: ${rem(-2)} ${rem(7)} ${rem(10)} rgba(0, 0, 0, 0.16);
          height: 296px;

          ${theme.media.mq(1500)`
            height: ${rem(250)};
          `}

          ${theme.media.mq(1420)`
            flex-direction: column;
            height: fit-content;
          `}

          ${theme.media.mq(992)`
            margin-bottom: ${rem(20)};
          `}

          img {
            width: ${rem(191)};
            height: ${rem(296)};
            object-fit: cover;

            ${theme.media.mq(1420)`
              height: ${rem(250)};
           `}

            ${theme.media.mq(1090)`
              height: ${rem(229)};
            `}

            ${theme.media.mq(360)`
              height: ${rem(250)};
            `}

            ${theme.media.mq(1420)`
              width: 100%;
            `}
          }

          .text_content {
            width: 100%;
            position: relative;
            padding: ${rem(45)} ${rem(23)} ${rem(22)} ${rem(26)};

            .top_stairs {
              position: absolute;
              top: 0;
              right: 11px;
              background-color: ${theme.palette.cream100};
              display: flex;
              align-items: center;
              justify-content: center;
              width: 120px;
              height: 28px;
              border-radius: 0 0 10px 10px;

              span {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: -10px;
                width: 14px;
                height: 14px;
                margin-right: 6px;

                &::before {
                  content: "\\e921";
                  font-family: "polgozar";
                  font-size: 14px;
                  color: ${theme.palette.primary};
                }

                &:last-child {
                  margin-right: 0;
                }
              }

              .dis_stairs {
                &::before {
                  color: rgba($color: #546e7a, 0.2);
                }
              }
            }

            h4 {
              height: ${rem(68)};
              overflow: hidden;
              margin-bottom: ${rem(9)};

              a {
                font-weight: 600;
                font-size: ${rem(28)};
                color: ${theme.palette.gray200};
                line-height: ${rem(34)};

                ${theme.media.mq(1700)`
                  font-size: ${rem(23)};
                `}

                ${theme.media.mq(1500)`
                  font-size: ${rem(23)};
                `}

                ${theme.media.mq(360)`
                  font-size: ${rem(24)};
                `}
              }
            }

            h5 {
              font-weight: 300;
              font-size: ${rem(23)};
              color: ${theme.palette.gray200};
              height: ${rem(25)};
              overflow: hidden;

              ${theme.media.mq(1500)`
                font-size: ${rem(19)};
              `}

              ${theme.media.mq(360)`
                font-size: ${rem(20)};
              `}
            }

            .view__join {
              margin-top: ${rem(66)};
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;

              ${theme.media.mq(1700)`
                align-items: flex-start;
                margin-top: ${rem(20)};
                flex-direction: column;
              `}

              ${theme.media.mq(1500)`
                margin-top: ${rem(20)};
              `}

              ${theme.media.mq(13455)`
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
              `}

              ${theme.media.mq(1090)`
                margin-top: ${rem(50)};
              `}

              .left {
                display: flex;
                flex-direction: column;

                ${theme.media.mq(1700)`
                  margin-bottom: ${rem(5)};
                `}

                span {
                  display: flex;
                  align-items: center;
                  font-weight: 500;
                  font-size: ${rem(20)};
                  color: ${theme.palette.blue100};

                  ${theme.media.mq(1500)`
                    font-size: ${rem(16)};
                  `}
                }

                .location {
                  margin-left: ${rem(-4)};
                  margin-bottom: ${rem(9)};

                  &::before {
                    content: "\\e920";
                    font-family: "polgozar";
                    font-size: ${rem(30)};
                    margin-right: ${rem(4)};
                    color: #91c8de;
                  }
                }

                .view {
                  margin-top: ${rem(8)};

                  &::before {
                    content: "\\e926";
                    font-family: "polgozar";
                    font-size: ${rem(25)};
                    margin-right: ${rem(10)};
                    color: #91c8de;
                  }
                }
              }

              .join {
                padding: ${rem(15)} ${rem(28)};
                background-color: ${rgba(theme.palette.primary, 0.2)};
                border-radius: ${rem(25)};
                font-weight: 600;
                font-size: ${rem(20)};
                color: ${theme.palette.primary};
                transition: all 0.3s;

                &:hover {
                  color: ${theme.palette.white};
                  background-color: ${theme.palette.primary};
                }

                ${theme.media.mq(1700)`
                  padding: ${rem(11)};
                  font-size: ${rem(15)};
                `}

                ${theme.media.mq(1090)`
                  padding: ${rem(11)} ${rem(21)};
                `}

                ${theme.media.mq(400)`
                  padding: ${rem(10)} ${rem(25)};
                `}
              }
            }
          }
        }
      }
    }

    .new_events_coming_up {
      .container {
        overflow: hidden;
      }

      .content {
        padding-bottom: ${rem(39)};

        .item_main_title {
          margin-bottom: 38px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          ${theme.media.mq(510)`
            flex-direction: column;
          `}

          h3 {
            ${theme.media.mq(510)`
              margin-bottom: 35px;
            `}

            ${theme.media.mq(420)`
              font-size: 23px;
            `}
          }
        }

        .item {
          background: ${theme.palette.white};
          filter: drop-shadow(
            ${rem(-2)} ${rem(7)} ${rem(10)} rgba(0, 0, 0, 0.16)
          );
          border-radius: ${rem(10)};
          overflow: hidden;

          ${theme.media.mq(1200)`
            margin-bottom: ${rem(30)};
          `}

          .pic {
            height: ${rem(302)};
            position: relative;

            ${theme.media.mq(1600)`
              height: ${rem(230)};
            `}

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            &::after {
              content: "";
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              background: linear-gradient(
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.47) 50.6%,
                #000 100%
              );
              z-index: 1;
            }

            .text {
              position: absolute;
              left: ${rem(18)};
              z-index: 2;
              bottom: ${rem(38)};

              ${theme.media.mq(1420)`
                bottom: ${rem(15)};
              `}

              .date {
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: ${rem(16)};
                color: ${theme.palette.white};
                margin-bottom: ${rem(8)};
                position: relative;

                ${theme.media.mq(1500)`
                  font-size: ${rem(14)};
                `}

                ${theme.media.mq(1420)`
                  font-size: ${rem(14)};
                `}

                &::before {
                  content: "\\e90e";
                  font-family: polgozar;
                  font-size: ${rem(22)};
                  margin-right: ${rem(9)};
                  margin-top: ${rem(-6)};
                }

                &::after {
                  content: "17";
                  position: absolute;
                  font-size: ${rem(12)};
                  top: ${rem(-1)};
                  left: ${rem(5)};
                }
              }

              h4 {
                a {
                  font-weight: 600;
                  font-size: ${rem(28)};
                  color: ${theme.palette.white};

                  ${theme.media.mq(1700)`
                    font-size: ${rem(20)};
                  `}

                  ${theme.media.mq(1500)`
                    font-size: 18px;
                  `}

                  ${theme.media.mq(1420)`
                    font-size: ${rem(17)};
                  `}
                }
              }
            }
          }

          .text_content {
            padding: ${rem(16)} ${rem(16)} ${rem(33)} ${rem(28)};
            color: ${theme.palette.blue100};

            ${theme.media.mq(1420)`
              bottom: ${rem(15)};
              padding: ${rem(16)} ${rem(10)} ${rem(33)};
            `}

            h5 {
              margin-bottom: ${rem(35)};
              display: flex;
              align-items: center;

              &::before {
                content: "\\e902";
                font-family: polgozar;
                font-size: ${rem(34)};
                margin-right: ${rem(8)};
                margin-top: ${rem(-6)};
              }

              a {
                font-weight: 500;
                font-size: ${rem(17)};
                color: ${theme.palette.blue100};

                ${theme.media.mq(1500)`
                  font-size: ${rem(15)};
                `}

                ${theme.media.mq(1420)`
                  bottom: ${rem(15)};
                  line-height: ${rem(30)};
                `}
              }
            }

            p {
              font-weight: 300;
              font-size: ${rem(15)};
              color: ${theme.palette.gray200};
              height: ${rem(130)} !important;
              overflow: hidden;
              margin-bottom: ${rem(20)};

              ${theme.media.mq(1500)`
                font-size: ${rem(13)};
              `}
            }

            .btn__map_attend_num {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;

              .map_attend_num {
                font-size: ${rem(17)};
                color: ${theme.palette.blue100};
                display: flex;
                flex-direction: column;

                ${theme.media.mq(1500)`
                  font-size: ${rem(14)};
                `}

                ${theme.media.mq(1420)`
                  font-size: ${rem(15)};
                `}

                .map {
                  display: flex;
                  align-items: center;
                  margin-bottom: 9px;

                  &::before {
                    content: "\\e920";
                    font-family: polgozar;
                    font-size: 30px;
                    margin-right: 5px;
                    margin-left: -10px;
                  }
                }
              }

              .btn {
                padding: ${rem(10)} ${rem(38)};
                border-radius: ${rem(30)};
                border: ${rem(1)} solid ${theme.palette.primary};
                font-weight: 600;
                font-size: ${rem(20)};
                color: ${theme.palette.primary};
                transition: all 0.3s;

                &:hover {
                  background-color: ${theme.palette.primary};
                  color: ${theme.palette.white};
                }

                ${theme.media.mq(1700)`
                  padding: ${rem(5)} ${rem(25)};
                `}

                ${theme.media.mq(1500)`
                  font-size: ${rem(17)};
                  padding: ${rem(6)} ${rem(30)};
                `}

                ${theme.media.mq(1420)`
                  padding: ${rem(5)} ${rem(20)};
                  font-size: ${rem(17)};
                `}
              }

              .cansel {
                background: rgba(100, 100, 99, 0.14);
                font-weight: 600;
                font-size: ${rem(15)};
                color: ${theme.palette.gray2100};
                border: none;
              }
            }
          }
        }

        .add_new_event {
          height: 100%;
          background-color: transparent;
          box-shadow: unset;
          display: flex;
          justify-content: center;
          border: ${rem(4)} dashed ${theme.palette.gray1100};
          position: relative;

          ${theme.media.mq(1200)`
            height: calc(100% - 30px);
          `}

          ${theme.media.mq(768)`
            height: ${rem(140)};
          `}

          &::before {
            position: absolute;
            content: "\\e91b";
            font-family: polgozar;
            font-size: ${rem(79)};
            left: 50%;
            top: 46%;
            color: ${theme.palette.gray1100};
            transform: translate(-50%, -50%);

            ${theme.media.mq(768)`
              content: unset;
            `}
          }

          .btn_add {
            margin-bottom: ${rem(44)};
            width: ${rem(322)};
            align-self: flex-end;
            padding: ${rem(18)} 0;
            border: none;
            border-radius: ${rem(30)};
            background: #a2bfcc;
            font-size: ${rem(30)};
            color: ${theme.palette.white};
            transition: all 0.5s;

            ${theme.media.mq(1700)`
              width: ${rem(280)};
            `}

            ${theme.media.mq(1500)`
              font-size: ${rem(18)};
              padding: ${rem(13)} 0;
            `}

            ${theme.media.mq(1420)`
              width: ${rem(230)};
            `}

            &:hover {
              background-color: ${theme.palette.gray200};
            }
          }
        }
      }
    }

    footer {
      background-color: ${theme.palette.dark100};
      padding-top: ${rem(44)};
      border-top: ${rem(10)} solid ${theme.palette.primary};
      overflow: hidden;

      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        ${theme.media.mq(992)`
          flex-direction: column;
        `}

        &::before {
          content: url(../img/logo/footer_blur_logo.svg);
          position: absolute;
          left: ${rem(-130)};
          top: ${rem(-19)};
          filter: blur(${rem(7)});

          ${theme.media.mq(568)`
            left: 50%;
            transform: translateX(-50%);
          `}
        }

        .left {
          margin-bottom: ${rem(44)};

          ${theme.media.mq(992)`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          `}

          ${theme.media.mq(568)`
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          `}

          .logo {
            margin-bottom: ${rem(44)};
          }

          ul {
            ${theme.media.mq(568)`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}

            li {
              margin-bottom: ${rem(19)};
              display: flex;
              align-items: center;

              svg {
                width: ${rem(23)};
                margin-right: ${rem(13)};
              }

              a {
                font-size: ${rem(20)};
                color: ${rgba(theme.palette.white, 0.5)};

                ${theme.media.mq(1500)`
                  font-size: ${rem(17)};
                `}
              }

              address {
                font-size: ${rem(20)};
                color: ${rgba(theme.palette.white, 0.5)};
                margin: 0;

                ${theme.media.mq(1500)`
                  font-size: ${rem(17)};
                `}
              }

              &:last-child {
                &::before {
                  content: "\\e920";
                  font-family: polgozar;
                  font-size: ${rem(28)};
                  margin-right: ${rem(14)};
                  font-weight: 300;
                  margin-left: ${rem(-3)};
                  color: ${theme.palette.white};
                  opacity: 0.4;
                }
              }
            }
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          padding-left: ${rem(79)};
          padding-top: ${rem(27)};
          border-left: ${rem(0.5)} solid ${rgba(theme.palette.white, 0.3)};

          ${theme.media.mq(1090)`
            padding-left: ${rem(20)};
          `}

          ${theme.media.mq(992)`
            border-left: unset;
            padding-left: 0px;
            border-top: ${rem(0.5)} solid ${rgba(theme.palette.white, 0.3)};
            width: 100%;
            padding-bottom: ${rem(30)};
          `}

          p {
            max-width: ${rem(530)};
            font-weight: 300;
            font-size: ${rem(22)};
            line-height: ${rem(30)};
            color: ${rgba(theme.palette.white, 0.5)};
            margin-bottom: ${rem(40)};

            ${theme.media.mq(1500)`
              font-size: ${rem(19)};
            `}

            ${theme.media.mq(768)`
              font-size: ${rem(19)};
            `}

            ${theme.media.mq(450)`
              text-align: center;
            `}
          }

          .btn {
            align-self: flex-end;
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${rem(170)};
            height: ${rem(53)};
            border-radius: ${rem(55)};
            background: ${rgba(theme.palette.white, 0.17)};
            font-weight: 600;
            font-size: ${rem(20)};
            color: ${theme.palette.white};
            transition: all 0.3s;

            ${theme.media.mq(1500)`
              font-size: ${rem(17)};
              height: ${rem(48)};
            `}

            &:hover {
              background-color: ${theme.palette.white};
              color: ${theme.palette.gray200};
            }

            ${theme.media.mq(450)`
              align-self: center;
            `}
          }
        }
      }

      .copy_right {
        background: transparent;
        /* Note: currently only Safari supports backdrop-filter */
        backdrop-filter: blur(0px);
        --webkit-backdrop-filter: blur(0px);
        backdrop-filter: brightness(${rem(4)});

        background-color: rgba(255, 255, 255, 0.04);

        .copy_right_content {
          display: flex;
          justify-content: space-between;
          padding: ${rem(30)} 0;

          ${theme.media.mq(440)`
            flex-direction: column-reverse;
            justify-content: center;
            text-align: center;
          `}

          p {
            font-size: ${rem(20)};
            color: ${theme.palette.white};
            margin: 0;

            ${theme.media.mq(1500)`
              font-size: ${rem(17)};
            `}
          }

          ul {
            display: flex;
            align-items: center;

            ${theme.media.mq(440)`
              margin-bottom: ${rem(225)};
              justify-content: center;
            `}

            li {
              margin-left: ${rem(37)};

              ${theme.media.mq(440)`
                margin: 0 ${rem(16)};
              `}

              a {
                svg {
                  stroke: ${theme.palette.white};
                }

                &:hover {
                  &::before {
                    color: ${theme.palette.primary};
                  }

                  svg {
                    stroke: ${theme.palette.primary};
                  }
                }
              }
            }

            .instagram {
              a {
                display: flex;
                align-items: center;

                &::before {
                  content: "\\e903";
                  font-family: polgozar;
                  font-size: ${rem(35)};
                  color: ${theme.palette.white};
                  opacity: 0.5;
                }
              }
            }

            .twitter {
              a {
                display: flex;
                align-items: center;

                &::before {
                  content: "\\e924";
                  font-family: polgozar;
                  font-size: ${rem(33)};
                  color: ${theme.palette.white};
                  opacity: 0.5;
                }
              }
            }
          }
        }
      }
    }

    .event_details {
      button {
        outline: none;
      }

      .top_box {
        background-color: ${theme.palette.white};
        padding: ${rem(27)} 0 ${rem(13)};

        .content {
          display: flex;
          justify-content: space-between;

          ${theme.media.mq(1400)`
            flex-direction: column;
          `}

          .left {
            display: flex;

            ${theme.media.mq(992)`
              flex-direction: column;
              align-items: center;
            `}

            .big_img {
              width: ${rem(442)};
              height: ${rem(314)};
              object-fit: cover;
              border-radius: ${rem(10)};
              box-shadow: ${rem(-2)} ${rem(7)} ${rem(10)} rgba(0, 0, 0, 0.16);
              margin-right: ${rem(40)};

              ${theme.media.mq(992)`
                margin-right: 0;
              `}

              ${theme.media.mq(500)`
                width: 100%;
              `}
            }

            .text_content {
              ${theme.media.mq(992)`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}

              ${theme.media.mq(992)`
                margin: ${rem(30)} 0;
              `}

              .date {
                border-radius: ${rem(17)};
                background: ${theme.palette.blue200};
                padding: ${rem(7.5)} ${rem(19)};
                width: fit-content;
                display: flex;
                align-items: center;
                font-size: ${rem(16)};
                color: ${theme.palette.white};
                margin-bottom: ${rem(6.5)};

                ${theme.media.mq(1500)`
                  font-size: ${rem(14)};
                `}

                &::before {
                  content: "\\e90e";
                  font-family: polgozar;
                  font-size: ${rem(18)};
                  margin-right: ${rem(8)};
                }
              }

              h3 {
                margin-bottom: ${rem(6.5)};
                font-weight: 600;
                font-size: ${rem(35)};
                color: ${theme.palette.gray200};
                line-height: ${rem(43)};

                ${theme.media.mq(1500)`
                  font-size: ${rem(29)};
                `}

                ${theme.media.mq(500)`
                  font-size: ${rem(24)};
                `}
              }

              .map_content {
                display: flex;
                border-radius: ${rem(10)};
                background: ${theme.palette.white};
                border: ${rem(1)} solid ${theme.palette.blue200};
                width: ${rem(311)};
                height: ${rem(122)};
                overflow: hidden;
                margin-bottom: ${rem(8)};

                ${theme.media.mq(370)`
                  width: 100%;
                `}

                .text {
                  padding: ${rem(17)} ${rem(12)};

                  .map {
                    display: flex;
                    align-items: center;

                    font-size: ${rem(17)};
                    color: ${theme.palette.blue200};

                    &::before {
                      content: "\\e920";
                      font-family: polgozar;
                      font-size: ${rem(20)};
                      margin-right: ${rem(5)};
                      margin-top: ${rem(-5)};
                    }
                  }

                  p {
                    margin-top: ${rem(6)};
                    font-weight: 300;
                    font-size: ${rem(14)};
                    color: ${theme.palette.gray500};
                    width: ${rem(162)};
                    max-height: ${rem(62)};
                    overflow: hidden;
                  }
                }

                img {
                  border-left: ${rem(1)} solid ${theme.palette.blue200};
                  width: ${rem(122)};
                  height: 100%;
                  object-fit: cover;

                  ${theme.media.mq(370)`
                    width: 100%;
                  `}
                }
              }

              .vid_confronce {
                background: ${theme.palette.white};
                border: ${rem(1)} solid ${theme.palette.blue200};
                width: ${rem(311)};
                padding: ${rem(12)} ${rem(15)} ${rem(12)} ${rem(11)};
                border-radius: ${rem(10)};
                margin-bottom: ${rem(13)};
                display: flex;
                align-items: center;
                font-size: ${rem(17)};
                color: ${theme.palette.blue200};
                position: relative;

                ${theme.media.mq(1500)`
                  font-size: ${rem(14)};
                `}

                ${theme.media.mq(370)`
                  width: 100%;
                `}

                &::before {
                  content: "\\e904";
                  font-family: polgozar;
                  font-size: ${rem(20)};
                  margin-right: ${rem(8)};
                }

                &::after {
                  position: absolute;
                  right: 0;
                  content: "\\e912";
                  font-family: polgozar;
                  font-size: ${rem(15)};
                  margin-right: ${rem(8)};
                }
              }

              ul {
                li {
                  font-weight: 300;
                  font-size: ${rem(15)};
                  color: ${theme.palette.gray200};

                  ${theme.media.mq(1500)`
                    font-size: ${rem(13)};
                  `}

                  span {
                    font-size: ${rem(17)};
                    color: ${theme.palette.blue100};

                    ${theme.media.mq(1500)`
                      font-size: ${rem(14)};
                    `}
                  }

                  &:first-child {
                    margin-bottom: ${rem(7)};
                  }
                }
              }
            }
          }

          .right {
            ${theme.media.mq(992)`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}

            .price__date {
              margin-bottom: ${rem(30)};
              display: flex;

              ${theme.media.mq(500)`
                flex-direction: column;
                width: 100%;
              `}

              .date {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: ${rem(105)};
                height: ${rem(100)};
                border-radius: ${rem(10)};
                background: ${theme.palette.gray600};
                border: ${rem(1)} solid ${theme.palette.gray700};
                overflow: hidden;

                ${theme.media.mq(500)`
                  align-self: center;
                  margin-bottom: ${rem(25)};
                `}

                .text {
                  font-size: ${rem(14)};
                  color: ${theme.palette.gray800};
                }

                .num {
                  font-family: Montserrat;
                  font-weight: bold;
                  font-size: ${rem(27)};
                  text-align: left;
                  color: ${theme.palette.red100};
                }

                div {
                  margin-top: ${rem(8)};
                  font-size: ${rem(12)};
                  color: ${theme.palette.gray900};
                  padding: ${rem(3)} ${rem(25)};
                  background-color: ${theme.palette.gray1000};
                }
              }

              .price {
                display: flex;
                justify-content: space-between;
                width: ${rem(472)};
                height: ${rem(100)};
                margin-left: ${rem(22)};
                background-color: ${rgba(theme.palette.blue300, 0.4)};
                border-radius: ${rem(10)};
                overflow: hidden;

                ${theme.media.mq(1700)`
                  width: ${rem(320)};
                `}

                ${theme.media.mq(500)`
                  width: 100%;
                  margin-left: 0;
                `}

                .left {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  min-width: ${rem(165)};
                  background-color: ${theme.palette.blue200};

                  ${theme.media.mq(1700)`
                    min-width: ${rem(120)};
                  `}

                  .text {
                    padding: ${rem(7)} 0;
                    background-color: ${theme.palette.green100};
                    font-weight: 600;
                    font-size: ${rem(21)};
                    color: ${theme.palette.primary};

                    ${theme.media.mq(992)`
                      flex-direction: row;
                      width: 100%;
                    `}
                  }

                  .num {
                    font-weight: bold;
                    font-size: ${rem(30)};
                    color: ${theme.palette.white};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    height: 100%;
                  }
                }

                .right {
                  .input_content {
                    margin: ${rem(14)} ${rem(24)} 0px 0;

                    label {
                      font-weight: 300;
                      font-size: ${rem(16)};
                      color: ${theme.palette.green100};
                    }

                    input {
                      width: ${rem(54)};
                      height: ${rem(29)};
                      background-color: ${theme.palette.white};
                      border-radius: ${rem(10)};
                      border: none;
                      text-align: center;
                      font-size: ${rem(16)};
                      color: ${theme.palette.green100};
                    }
                  }

                  button {
                    border-radius: ${rem(19.5)};
                    background: ${theme.palette.primary};
                    font-weight: 600;
                    font-size: ${rem(18)};
                    color: ${theme.palette.white};
                    border: none;
                    padding: ${rem(8)} ${rem(36)};
                    margin-top: ${rem(7)};
                    transition: all 0.4s;

                    ${theme.media.mq(1500)`
                      font-size: ${rem(15)};
                    `}

                    &:hover {
                      background-color: ${theme.palette.gray200};
                    }
                  }
                }
              }
            }

            .share {
              border-top: ${rem(1)} solid ${theme.palette.gray1100};
              border-bottom: ${rem(1)} solid ${theme.palette.gray1100};
              padding: ${rem(13)} 0;
              display: flex;
              justify-content: space-between;
              align-items: center;

              ${theme.media.mq(992)`
                width: 100%;
              `}

              ${theme.media.mq(400)`
                flex-direction: column;
              `}

              .left {
                display: flex;
                align-items: center;
                font-size: 17px;
                text-align: center;
                color: ${theme.palette.gray200};

                ${theme.media.mq(992)`
                  flex-direction: row;
                `}

                ul {
                  display: flex;
                  align-items: center;
                  margin-left: 8px;

                  li {
                    margin: 0 8.5px;

                    a {
                      &:hover {
                        &::before {
                          color: ${theme.palette.primary};
                        }
                      }
                    }
                  }

                  .twitter {
                    &::before {
                      content: "\\e924";
                      font-family: polgozar;
                      font-size: 29px;
                      color: ${theme.palette.gray200};
                    }
                  }

                  .instagram {
                    &::before {
                      content: "\\e903";
                      font-family: polgozar;
                      font-size: 33px;
                      color: ${theme.palette.gray200};
                    }
                  }

                  .facebook {
                    &::before {
                      content: "\\e918";
                      font-family: polgozar;
                      font-size: 33px;
                      color: ${theme.palette.gray200};
                    }
                  }
                }
              }

              .btn {
                border-radius: ${rem(19.5)};
                background: transparent;
                border: ${rem(1)} solid ${theme.palette.gray300};
                padding: ${rem(7)} ${rem(33)};
                font-weight: 600;
                font-size: ${rem(18)};
                color: ${theme.palette.gray200};
                transition: all 0.4s;

                ${theme.media.mq(1500)`
                  font-size: ${rem(15)};
                `}

                &:hover {
                  background-color: ${theme.palette.gray200};
                  color: ${theme.palette.white};
                }

                ${theme.media.mq(992)`
                  margin-top: ${rem(10)};
                `}
              }
            }
          }
        }
      }

      .details {
        padding-top: ${rem(35)};

        .content {
          display: flex;
          justify-content: space-between;
          padding-bottom: ${rem(53)};

          ${theme.media.mq(1420)`
            flex-direction: column-reverse;
          `}

          .text_content {
            margin-right: ${rem(20)};

            ${theme.media.mq(1420)`
              margin-right: 0px;
            `}

            h4 {
              font-size: 25px;
              color: ${theme.palette.gray200};
              margin-bottom: 10px;
            }

            p {
              max-width: ${rem(972)};
              font-weight: 300;
              font-size: ${rem(17)};
              color: ${theme.palette.gray200};
              line-height: ${rem(33)};

              ${theme.media.mq(1500)`
                font-size: ${rem(15)};
                line-height: ${rem(25)};
              `}
            }
          }

          .right_box {
            ${theme.media.mq(1420)`
              display: flex;
              justify-content: space-between;
              margin-bottom: ${rem(35)};
            `}

            ${theme.media.mq(768)`
              flex-direction: column;
            `}

            .right_big_img {
              width: ${rem(584)};
              height: ${rem(280)};
              border-radius: ${rem(10)};
              box-shadow: ${rem(-2)} ${rem(7)} ${rem(10)} rgba(0, 0, 0, 0.16);
              margin-bottom: ${rem(15)};

              ${theme.media.mq(1420)`
                width: 47%;
                margin-right: ${rem(20)};
              `}

              ${theme.media.mq(768)`
                width: 100%;
              `}
            }

            .map_content {
              display: flex;
              justify-content: space-between;
              border: ${rem(1)} solid ${theme.palette.blue200};
              border-radius: ${rem(10)};
              overflow: hidden;
              background-color: ${theme.palette.white};
              height: ${rem(201)};

              .text {
                padding: ${rem(17)} ${rem(10)};

                .map {
                  display: flex;
                  align-items: center;
                  font-size: ${rem(17)};
                  color: ${theme.palette.blue200};

                  &::before {
                    content: "\\e920";
                    font-family: polgozar;
                    font-size: ${rem(20)};
                    margin-right: ${rem(5)};
                    margin-top: ${rem(-5)};
                  }
                }

                p {
                  margin-top: ${rem(37)};
                  max-width: ${rem(162)};
                  font-family: Montserrat;
                  font-weight: 300;
                  font-size: ${rem(14)};
                  color: ${theme.palette.gray500};
                }
              }

              .map_img {
                height: 100%;
                object-fit: cover;

                ${theme.media.mq(1420)`
                  width: 50%;
                `}
              }
            }

            .vid_confronce {
              margin-top: ${rem(16)};
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: ${rem(12)} ${rem(16)} ${rem(12)} ${rem(35)};
              border-radius: ${rem(10)};
              background: ${theme.palette.white};
              border: ${rem(1)} solid ${theme.palette.blue200};
              font-size: ${rem(17)};
              color: ${theme.palette.blue200};
              position: relative;

              &::after {
                position: absolute;
                right: 0;
                content: "\\e912";
                font-family: polgozar;
                font-size: ${rem(15)};
                margin-right: ${rem(8)};
              }
            }
          }
        }
      }

      .attended_list {
        padding: ${rem(42)} 0 ${rem(71)};
        border-top: ${rem(1)} solid ${theme.palette.gray1300};
        border-bottom: ${rem(1)} solid ${theme.palette.gray1300};

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            width: 100%;

            .text {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: ${rem(20)};

              h3 {
                margin: 0;
                font-size: ${rem(25)};
                color: ${theme.palette.gray200};
              }

              .more {
                display: flex;
                align-items: center;
                font-size: ${rem(24)};
                color: ${theme.palette.gray1200};

                &::after {
                  content: "\\e912";
                  font-family: polgozar;
                  font-size: ${rem(17)};
                  margin-left: ${rem(5)};
                }
              }
            }
          }

          .member_icon {
            display: flex;
            align-items: center;
            font-size: ${rem(20)};
            color: ${theme.palette.blue100};

            &::before {
              content: "\\e926";
              font-family: polgozar;
              font-size: ${rem(21)};
              margin-right: ${rem(8)};
            }
          }

          .items {
            max-width: ${rem(951)};
            display: flex;
            flex-wrap: wrap;

            ${theme.media.mq(1090)`
              margin-top: ${rem(50)};
            `}

            .item {
              margin-bottom: ${rem(24)};
              border-radius: ${rem(32)};
              padding: ${rem(15)} 0;
              text-align: center;
              position: relative;
              background-color: rgba($color: #91c8de, 0.35);
              width: calc(50% - 35px);

              &:nth-child(odd) {
                margin-right: ${rem(60)};

                ${theme.media.mq(768)`
                  margin-right: 0px;
                `}
              }

              .white_bg {
                position: absolute;
                left: ${rem(-5)};
                display: flex;
                align-items: center;
                justify-content: center;
                top: ${rem(-25)};
                border-radius: ${rem(50)};
                padding: ${rem(4)};
                background-color: ${theme.palette.gray100};

                .gradient_bg {
                  display: inline-block;
                  width: ${rem(64)};
                  height: ${rem(64)};
                  padding: ${rem(10)};
                  border-radius: ${rem(50)};
                  overflow: hidden;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: linear-gradient(#abbec6 0%, #ffb300 100%);
                }
              }

              h5 {
                font-weight: 300;
                font-size: ${rem(18)};
                color: ${theme.palette.gray200};
              }

              ${theme.media.mq(768)`
                width: 100%;
              `}

              ${theme.media.mq(360)`
                width: 100%;
                padding: ${rem(15)} 0 ${rem(15)} ${rem(90)};
                text-align: unset;
              `}
            }
          }
        }
      }

      .donated_list {
        padding: ${rem(42)} 0 ${rem(71)};
        border-bottom: 1px solid ${theme.palette.gray1300};

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            .more {
              &::after {
                content: "\\e912";
                font-family: polgozar;
                font-size: ${rem(17)};
                margin-left: ${rem(5)};
              }
            }
          }

          .member_icon {
            display: flex;
            align-items: center;
            font-size: ${rem(20)};
            color: ${theme.palette.primary};

            &::before {
              content: "\\e926";
              font-family: polgozar;
              font-size: ${rem(21)};
              margin-right: ${rem(8)};
            }

            ${theme.media.mq(1090)`
              margin-bottom: ${rem(80)};
            `}
          }
        }
      }

      .comments {
        padding-top: ${rem(42)};
        padding-bottom: ${rem(72)};
        border-bottom: ${rem(1)} solid ${theme.palette.gray1300};

        .content {
          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: ${rem(24)};

            ${theme.media.mq(520)`
              flex-direction: column;
            `}

            h3 {
              font-size: ${rem(25)};
              color: ${theme.palette.gray200};
              margin: 0;
            }

            button {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: ${rem(10)} ${rem(90)};
              border-radius: ${rem(22)};
              background: rgba(255, 255, 255, 0.72);
              border: ${rem(1)} solid ${theme.palette.gray200};
              font-weight: 600;
              font-size: ${rem(21)};
              color: ${theme.palette.gray200};
              position: relative;

              ${theme.media.mq(992)`
                padding: ${rem(10)} ${rem(50)} ${rem(10)} ${rem(30)};
              `}

              ${theme.media.mq(520)`
                margin-top: ${rem(25)};
                width: 100%;
                padding: ${rem(10)} 0;
              `}

              &::before {
                content: "\\e928";
                font-family: polgozar;
                font-size: ${rem(17)};
                margin-left: ${rem(5)};
              }

              span {
                width: ${rem(23)};
                height: ${rem(23)};
                background: ${theme.palette.gray1900};
                border-radius: ${rem(25)};
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                right: ${rem(16)};
                top: ${rem(10)};
                font-family: Montserrat;
                font-weight: 500;
                font-size: ${rem(16)};
                text-align: left;
                color: ${theme.palette.blue200};

                ${theme.media.mq(360)`
                  display: none;
                `}
              }
            }
          }

          .comment_box {
            padding: ${rem(71)} ${rem(96)} ${rem(116)};
            border-radius: ${rem(10)};
            background: ${theme.palette.gray1700};
            position: relative;

            ${theme.media.mq(1090)`
              padding: ${rem(71)} ${rem(35)} ${rem(116)};
            `}

            ${theme.media.mq(450)`
              padding: ${rem(71)} ${rem(10)} ${rem(116)};
            `}

            .item {
              position: relative;
              padding: ${rem(17)} ${rem(64)} ${rem(78)};
              border-radius: ${rem(10)};
              width: 90%;
              margin-bottom: ${rem(41)};

              ${theme.media.mq(768)`
                width: 100%;
              `}

              ${theme.media.mq(768)`
                margin-left: 0;
                padding: ${rem(17)} ${rem(20)} ${rem(78)};
              `}

              &:last-child {
                margin-bottom: unset;
              }

              .white_bg_img {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: ${rem(-25)};
                left: ${rem(-25)};
                width: ${rem(74)};
                height: ${rem(74)};
                border-radius: ${rem(50)};
                background-color: ${theme.palette.gray1700};
                padding: ${rem(4)};

                ${theme.media.mq(768)`
                  margin-left: 0;
                  top: ${rem(5)};
                  left: unset;
                  right: ${rem(5)};
                `}

                ${theme.media.mq(450)`
                  position: unset;
                  margin-bottom: ${rem(10)};
                `}

                .gradient_border {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: ${rem(50)};
                  padding: ${rem(1)};
                  width: ${rem(77)};
                  height: ${rem(63)};
                  background: linear-gradient(#abbec6 0%, #ffb300 100%);
                }
              }

              h5 {
                margin-bottom: ${rem(39)};
                font-size: ${rem(18)};
                color: ${theme.palette.gray200};
              }

              p {
                font-weight: 300;
                font-size: ${rem(21)};
                color: ${theme.palette.gray200};
                margin-bottom: 0;

                ${theme.media.mq(1500)`
                  font-size: ${rem(17)};
                `}

                ${theme.media.mq(768)`
                  line-height: ${rem(30)};
                `}
              }

              button {
                outline: none;
                position: absolute;
                bottom: ${rem(12)};
                right: ${rem(23)};
                font-weight: 600;
                font-size: ${rem(21)};
                color: ${theme.palette.white};
                border: none;
              }

              .send {
                padding: ${rem(9)} ${rem(36)};
                border-radius: ${rem(22)};
                background: rgba(84, 110, 122, 0.69);
              }

              .replay {
                background-color: transparent;
                font-size: ${rem(17)};
                color: ${theme.palette.gray1500};
              }

              .edit {
                bottom: unset;
                background-color: transparent;
                top: ${rem(10)};
                font-size: ${rem(17)};
                color: ${theme.palette.gray1500};

                ${theme.media.mq(768)`
                  top: unset;
                  bottom: ${rem(-60)};
                `}
              }

              .time {
                margin-top: ${rem(4)};
                font-size: ${rem(15)};
                text-align: left;
                color: ${theme.palette.gray1800};
                position: absolute;
                left: 0;
                top: 100%;
              }
            }

            .avalible_send {
              background-color: rgba(${theme.palette.blue400}, 0.6);
            }

            .sended {
              background-color: rgba($color: #d3d3d3, 0.6);
              padding-bottom: ${rem(20)};

              ${theme.media.mq(768)`
                padding-bottom: ${rem(78)};
              `}
            }

            .repited {
              background-color: rgba($color: #d3d3d3, 0.6);
              padding-bottom: ${rem(20)};
              margin-left: ${rem(121)};
              margin-bottom: ${rem(70)};

              ${theme.media.mq(1090)`
                margin-left: ${rem(80)};
              `}

              ${theme.media.mq(768)`
                margin-left: 0;
                padding-bottom: ${rem(78)};
              `}
            }

            .edit {
              margin-top: ${rem(42)};
              background-color: rgba($color: #d3d3d3, 0.6);
              padding-bottom: ${rem(20)};
              margin-left: ${rem(121)};

              ${theme.media.mq(1090)`
                margin-left: ${rem(80)};
              `}

              ${theme.media.mq(768)`
                margin-left: 0;
                padding-bottom: ${rem(78)};
                position: relative;
              `}
            }

            .paganition {
              display: flex;
              align-items: center;
              position: absolute;
              right: ${rem(12)};
              bottom: ${rem(26)};
              font-weight: 500;
              font-size: ${rem(23)};
              color: ${theme.palette.gray1500};

              ${theme.media.mq(768)`
                width: 100%;
                justify-content: center;
              `}

              ${theme.media.mq(370)`
                flex-wrap: wrap;
              `}

              li {
                margin: 0 ${rem(8)};
                cursor: pointer;
              }

              .active {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fff;
                width: ${rem(43)};
                height: ${rem(43)};
                border-radius: ${rem(10)};
              }
            }
          }
        }
      }

      .pics_gallery {
        .content {
          padding: ${rem(32)} 0;

          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: ${rem(24)};

            ${theme.media.mq(520)`
              flex-direction: column;
            `}

            h3 {
              font-size: ${rem(25)};
              color: ${theme.palette.gray200};
              margin: 0;
            }

            button {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: ${rem(10)} ${rem(90)};
              border-radius: ${rem(22)};
              background: rgba(255, 255, 255, 0.72);
              border: ${rem(1)} solid ${theme.palette.gray200};
              font-weight: 600;
              font-size: ${rem(21)};
              color: ${theme.palette.gray200};
              position: relative;

              ${theme.media.mq(992)`
                padding: ${rem(10)} ${rem(50)} ${rem(10)} ${rem(30)};
              `}

              ${theme.media.mq(520)`
                margin-top: ${rem(25)};
                width: 100%;
                padding: ${rem(10)} 0;
              `}

              &::before {
                content: "\\e928";
                font-family: polgozar;
                font-size: ${rem(17)};
                margin-left: ${rem(5)};
              }

              span {
                width: ${rem(23)};
                height: ${rem(23)};
                background: ${theme.palette.gray1900};
                border-radius: ${rem(25)};
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                right: ${rem(16)};
                top: ${rem(10)};
                font-family: Montserrat;
                font-weight: 500;
                font-size: ${rem(16)};
                text-align: left;
                color: ${theme.palette.blue200};

                ${theme.media.mq(360)`
                  display: none;
                `}
              }
            }
          }

          .pics_box {
            padding: ${rem(40)} ${rem(75)} 0;
            height: ${rem(664)};
            overflow: auto;
            display: flex;
            flex-wrap: wrap;
            border-radius: ${rem(10)};
            background: ${theme.palette.white};

            ${theme.media.mq(1420)`
              padding: ${rem(40)} ${rem(10)} 0;
            `}

            ${theme.media.mq(1090)`
              flex-wrap: wrap;
            `}

            img,
            button {
              width: calc(25% - 26px);
              margin: 0 ${rem(13)} ${rem(34)};
              height: ${rem(235)};
              border-radius: ${rem(10)};

              ${theme.media.mq(1090)`
                width: calc(33.33333% - 26px);
              `}

              ${theme.media.mq(992)`
                width: calc(50% - 26px);
              `}

              ${theme.media.mq(992)`
                width: 100%;
                margin: 0 0px ${rem(34)};
              `}
            }

            button {
              background: ${theme.palette.gray1600};
              border: ${rem(3)} dashed ${theme.palette.gray1500};
              outline: none;
              position: relative;

              &::before {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                content: "\\e91b";
                font-family: polgozar;
                font-size: ${rem(55)};
                margin-left: ${rem(5)};
                color: #7b919b;
              }
            }

            img {
              object-fit: cover;
            }
          }
        }
      }

      .relate_events {
        border-top: unset;

        .content {
          padding-top: ${rem(33)};
          border-top: unset;

          .btn {
            padding: ${rem(10)} ${rem(40)} !important;

            ${theme.media.mq(1700)`
              padding: ${rem(6)} ${rem(23)} !important;
              font-size: ${rem(20)};
           `}

            ${theme.media.mq(1500)`
              font-size: ${rem(15)} !important;
            `}
          }
        }
      }
    }

    .relate_events {
      border-top: ${rem(1)} solid ${theme.palette.gray1300};
      padding-top: ${rem(42)};
      padding-bottom: ${rem(30)};
      overflow: hidden;

      .content {
        .title {
          margin-bottom: ${rem(32)};

          h3 {
            font-size: ${rem(25)};
            color: ${theme.palette.gray200};
            margin: 0;
          }
        }

        .items {
          .item {
            width: 100%;
            background: ${theme.palette.white};
            filter: drop-shadow(
              ${rem(-2)} ${rem(7)} ${rem(10)} rgba(0, 0, 0, 0.16)
            );
            border-radius: ${rem(10)};
            overflow: hidden;

            .pic {
              height: ${rem(302)};
              position: relative;

              ${theme.media.mq(1600)`
                height: ${rem(230)};
              `}

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              &::after {
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                background: linear-gradient(
                  rgba(255, 255, 255, 0) 0%,
                  rgba(0, 0, 0, 0.47) 50.6%,
                  #000 100%
                );
                z-index: 1;
              }

              .text {
                position: absolute;
                left: ${rem(18)};
                z-index: 2;
                bottom: ${rem(38)};

                .date {
                  display: flex;
                  align-items: center;
                  font-weight: 500;
                  font-size: ${rem(16)};
                  color: ${theme.palette.white};
                  margin-bottom: ${rem(8)};
                  position: relative;

                  ${theme.media.mq(1420)`
                    font-size: ${rem(14)};
                  `}

                  &::before {
                    content: "\\e90e";
                    font-family: polgozar;
                    font-size: ${rem(22)};
                    margin-right: ${rem(9)};
                    margin-top: ${rem(-6)};
                  }

                  &::after {
                    content: "17";
                    position: absolute;
                    font-size: ${rem(12)};
                    top: ${rem(1)};
                    left: ${rem(5)};
                  }
                }

                h4 {
                  a {
                    font-weight: 600;
                    font-size: ${rem(28)};
                    color: ${theme.palette.white};

                    ${theme.media.mq(1700)`
                      font-size: ${rem(20)};
                    `}

                    ${theme.media.mq(1420)`
                      font-size: ${rem(17)};
                    `}
                  }
                }
              }
            }

            .text_content {
              padding: ${rem(16)} ${rem(18)} ${rem(33)} ${rem(28)};
              color: ${theme.palette.blue100};

              p {
                font-weight: 300;
                font-size: ${rem(13)};
                color: ${theme.palette.gray200};
                margin-bottom: ${rem(25)};
              }

              .btn__map_attend_num {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;

                .map_attend_num {
                  font-size: ${rem(17)};
                  color: ${theme.palette.blue100};
                  display: flex;
                  flex-direction: column;

                  .map {
                    margin-bottom: ${rem(19)};
                    margin-left: ${rem(-7)};
                    display: flex;
                    align-items: center;

                    &::before {
                      content: "\\e920";
                      font-family: polgozar;
                      font-size: ${rem(27)};
                      margin-right: ${rem(5)};
                    }
                  }
                }

                .btn {
                  padding: ${rem(15)} ${rem(42)};
                  border-radius: ${rem(30)};
                  border: ${rem(1)} solid ${theme.palette.primary};
                  font-weight: 600;
                  font-size: ${rem(20)};
                  color: ${theme.palette.primary};
                }
              }
            }
          }
        }
      }

      .swiper-container {
        overflow: unset;
      }
    }

    .donated_list {
      padding: ${rem(42)} 0 ${rem(71)};
      border-bottom: ${rem(1)} solid ${theme.palette.gray1300};

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          width: 100%;

          .text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: ${rem(20)};

            h3 {
              margin: 0;
              font-size: ${rem(25)};
              color: ${theme.palette.gray200};
            }

            .more {
              font-size: ${rem(24)};
              color: ${theme.palette.gray1400};
            }
          }
        }

        .member_icon {
          display: flex;
          align-items: center;
          font-size: ${rem(20)};
          color: ${theme.palette.blue100};
        }

        .items {
          max-width: ${rem(951)};
          display: flex;
          flex-wrap: wrap;
          margin: 0 ${rem(-8.5)};

          ${theme.media.mq(992)`
            margin: 0;
          `}

          .item {
            margin: 0 ${rem(8.5)} ${rem(24)};
            border-radius: ${rem(32)};
            padding: ${rem(15)} 0;
            padding-left: ${rem(100)};
            position: relative;
            background-color: rgba($color: #f8c858, 0.35);
            width: calc(33.33333% - 17px);

            ${theme.media.mq(992)`
              width: calc(50% - 17px);
            `}

            ${theme.media.mq(768)`
              width: 100%;
              text-align: center;
              margin: 0 0px ${rem(24)};
              padding-left: 0px;
            `}

            ${theme.media.mq(380)`
              text-align: unset;
              padding-left: ${rem(100)};
            `}

            .white_bg {
              position: absolute;
              left: ${rem(-5)};
              display: flex;
              align-items: center;
              justify-content: center;
              top: ${rem(-25)};
              border-radius: ${rem(50)};
              padding: ${rem(4)};
              background-color: ${theme.palette.gray100};

              .gradient_bg {
                display: inline-block;
                width: ${rem(64)};
                height: ${rem(64)};
                padding: ${rem(10)};
                border-radius: ${rem(50)};
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(#abbec6 0%, #ffb300 100%);
              }
            }

            h5 {
              font-weight: 300;
              font-size: ${rem(18)};
              color: ${theme.palette.gray200};

              ${theme.media.mq(1500)`
                font-size: ${rem(15)};
              `}
            }
          }
        }
      }
    }

    .relate_events {
      border-top: unset;

      .content {
        padding-top: ${rem(33)};
        border-top: 1px solid #b7b7b772;
      }
    }

    aside {
      position: absolute;
      top: ${rem(87)};
      width: 103px;
      height: calc(100% - 87px);
      left: 0;
      background-color: ${theme.palette.blue400};

      ${theme.media.mq(1200)`
        position: relative;
        width: 100%;
        top: 0;
      `}

      ${theme.media.mq(992)`
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        width: ${rem(250)};
        top: ${rem(89)};
        left: ${rem(-400)};
        transition: all ease-in 0.6s;
        z-index: 125;
        background-color: ${theme.palette.white};
        height: 100%;
      `}

      ${theme.media.mq(400)`
        width: 100%;
      `}

      .btn_close_admin_menu {
        position: absolute;
        background-color: transparent;
        border: none;
        right: ${rem(10)};
        top: ${rem(15)};
        outline: none;
        z-index: 126;

        ${theme.media.mqm(992)`
          display: none;
        `}

        svg {
          width: ${rem(30)};
          height: ${rem(30)};

          fill: ${theme.palette.pink100_a};
        }
      }

      .container {
        padding: unset;

        ${theme.media.mq(992)`
          padding: 0;
        `}

        ul {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: ${theme.palette.blue400};

          ${theme.media.mq(1200)`
            flex-direction: row;
          `}

          ${theme.media.mq(992)`
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            transition: all ease-in 0.6s;
            height: 100%;
            padding: 0;
          `}

          ${theme.media.mq(400)`
            width: 100%;
          `}

          li {
            min-height: ${rem(200)};
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-bottom: ${rem(1)} solid ${theme.palette.blue500};
            position: relative;

            ${theme.media.mq(1200)`
              min-height: unset;
              height: 100%;
              padding: ${rem(20)} 0;
              width: 20%;
              border-bottom: unset;
            `}

            ${theme.media.mq(992)`
              width: 100%;
              text-align: start;
            `}

            .num {
              position: absolute;
              top: ${rem(24)};
              display: flex;
              justify-content: center;
              align-items: center;
              right: 0;
              width: ${rem(59)};
              height: ${rem(45)};
              border-radius: ${rem(10)} 0px 0px ${rem(10)};
              background: ${theme.palette.cream200};
              font-size: ${rem(21)};
              color: ${theme.palette.red200};

              ${theme.media.mq(1620)`
                border-radius: ${rem(10)};
                top: ${rem(35)};
              `}

              ${theme.media.mq(992)`
                left: 0;
                right: unset;
                top: 50%;
                transform: translateY(-50%);
              `}
            }

            a {
              font-size: ${rem(18)};
              color: ${theme.palette.blue500};

              ${theme.media.mq(1500)`
                font-size: ${rem(16)};
              `}
            }
          }

          .active {
            background-color: ${theme.palette.blue500};

            a {
              color: ${theme.palette.white};
            }
          }
        }
      }
    }

    .group_details_aside {
      ${theme.media.mq(1888)`
        position: relative;
        width: 100%;
        top: 0;
      `}

      ${theme.media.mq(992)`
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        width: ${rem(250)};
        top: ${rem(89)};
        left: ${rem(-400)};
        transition: all ease-in 0.6s;
        z-index: 125;
        background-color: ${theme.palette.white};
        height: 100%;
      `}

      ${theme.media.mq(400)`
        width: 100%;
      `}

      ul {
        position: sticky;
        top: 0;

        ${theme.media.mq(1888)`
          flex-direction: row !important;
        `}

        ${theme.media.mq(992)`
          flex-direction: column !important;
        `}

        li {
          ${theme.media.mq(1888)`
            min-height: unset !important;
            height: 100%;
            padding: ${rem(20)} 0;
            width: 20%;
            border-bottom: unset !important;
          `}
        }
      }
    }

    .pro_page {
      padding-top: ${rem(40)};

      .pro_info {
        padding-bottom: ${rem(43)};
        border-bottom: ${rem(8)} solid #cee1e9;

        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .btns_content {
            display: flex;

            .edit_pro {
              width: ${rem(182)};
              height: ${rem(52)};
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 26px;
              background: rgba(84, 110, 122, 0.27);
              border: none;
              color: ${theme.palette.gray200};
              transition: all 0.5s;

              &::before {
                content: "\\e91e";
                font-family: polgozar;
                font-size: ${rem(24)};
                margin-left: ${rem(5)};
                margin-right: ${rem(8)};
                color: ${theme.palette.gray200};
                transition: all 0.5s;
              }

              &:hover {
                background-color: ${theme.palette.gray200};
                color: ${theme.palette.white};

                &::before {
                  color: ${theme.palette.white};
                }
              }
            }
          }

          .member_pro {
            width: 93%;
            height: ${rem(213)};
            margin-top: ${rem(25)};
            position: relative;
            background: linear-gradient(#d5e4ea 0%, #a2bfcc 100%);
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            border-radius: ${rem(150)} ${rem(10)} ${rem(10)} ${rem(150)};
            border-right: ${rem(11)} solid ${theme.palette.primary};
            padding: ${rem(27)} 0;
            margin-bottom: ${rem(80)};

            ${theme.media.mq(1700)`
              width: 93%;
            `}

            ${theme.media.mq(1200)`
              width: 100%;
            `}

            ${theme.media.mq(992)`
              flex-direction: column-reverse;
              border-right: none;
              border-left: ${rem(11)} solid ${theme.palette.primary};
              border-radius: ${rem(10)};
              padding-left: ${rem(30)};
              height: unset;
            `}

            ${theme.media.mq(768)`
              border-radius: ${rem(10)};
              overflow: hidden;
            `}

            .right {
              margin-right: ${rem(56)};

              ${theme.media.mq(992)`
                margin-right: 0;
                width: 100%;
              `}

              ul {
                li {
                  margin-bottom: ${rem(40)};
                  display: flex;
                  align-items: center;
                  font-size: ${rem(24)};
                  color: ${theme.palette.gray200};

                  ${theme.media.mq(400)`
                    flex-wrap: wrap;
                  `}

                  span {
                    margin-left: ${rem(7)};
                    font-weight: 300;
                    font-size: ${rem(20)};
                    color: ${theme.palette.gray2000};

                    ${theme.media.mq(400)`
                      margin-top: ${rem(10)};
                      width: 100%;
                      padding-left: ${rem(30)};
                    `}
                  }

                  svg {
                    margin-right: ${rem(11)};
                  }

                  &:last-child {
                    margin-bottom: 0;
                  }
                }

                .location {
                  &::before {
                    content: "\\e920";
                    font-family: polgozar;
                    font-size: ${rem(28)};
                    margin-right: ${rem(8)};
                  }
                }

                .birthday {
                  &::before {
                    content: "\\e916";
                    font-family: polgozar;
                    font-size: ${rem(28)};
                    margin-right: ${rem(8)};
                  }
                }

                .joined_date {
                  &::before {
                    margin-top: ${rem(-7)};
                    content: "\\e917";
                    font-family: polgozar;
                    font-size: ${rem(28)};
                    margin-right: ${rem(8)};
                  }
                }
              }
            }

            .left {
              display: flex;
              margin-left: ${rem(218)};

              ${theme.media.mq(992)`
                margin-left: 0;
                justify-content: space-between;
                flex-direction: row-reverse;
                width: 100%;
                align-items: center;
                margin-bottom: ${rem(25)};
              `}

              ${theme.media.mq(400)`
                flex-direction: column;
                margin-left: ${rem(-30)};
              `}

              .white_bg {
                margin-right: ${rem(10)};
                width: ${rem(205)};
                height: ${rem(205)};
                border-radius: ${rem(100)};
                overflow: hidden;
                background: ${theme.palette.gray100};
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: ${rem(-30)};
                left: ${rem(-5)};

                ${theme.media.mq(992)`
                  position: unset;
                `}

                ${theme.media.mq(400)`
                  margin-bottom: ${rem(25)};
                `}

                .gradient_bg {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: ${rem(182)};
                  height: ${rem(182)};
                  border-radius: ${rem(100)};
                  background: linear-gradient(
                    #abbec6,
                    ${theme.palette.primary}
                  );

                  img {
                    width: ${rem(171)};
                    height: ${rem(171)};
                    border-radius: ${rem(100)};
                    object-fit: cover;
                  }
                }
              }

              .text {
                display: flex;
                flex-direction: column;
                align-items: center;

                .stars {
                  width: ${rem(120)};
                  height: ${rem(30)};
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: ${rem(25)};
                  background: ${theme.palette.gray200};
                  margin-bottom: ${rem(64)};

                  ${theme.media.mq(992)`
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 0 0 ${rem(10)} 0;
                  `}

                  ${theme.media.mq(400)`
                    transform: rotate(-90deg);
                    top: ${rem(37)};
                    left: unset;
                    right: ${rem(-36)};
                    border-radius: ${rem(10)} 0 0 0;
                  `}

                  span {
                    margin-right: ${rem(5)};

                    ${theme.media.mq(400)`
                      transform: rotate(19deg);
                    `}

                    &:last-child {
                      margin-right: 0;
                    }

                    &::before {
                      content: "\\e921";
                      font-family: polgozar;
                      font-size: ${rem(15)};
                      color: ${theme.palette.primary};
                    }
                  }
                }

                h2 {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  font-size: ${rem(25)};
                  text-align: left;
                  color: ${theme.palette.gray200};

                  span {
                    margin-top: ${rem(15)};
                    font-weight: bold;
                    font-size: ${rem(35)};
                  }
                }
              }
            }
          }

          .text__form_box {
            display: flex;
            justify-content: flex-end;

            ${theme.media.mq(1700)`
              width: 93%;
            `}

            ${theme.media.mq(1200)`
              width: 100%;
            `}

            ${theme.media.mq(1090)`
              flex-wrap: wrap;
              justify-content: center;
            `}

            .form_box {
              border-right: ${rem(11)} solid ${theme.palette.gray200};
              border-radius: ${rem(10)};
              background: #d5e4ea;
              padding: ${rem(20)} ${rem(21)} ${rem(20)} ${rem(28)};
              width: ${rem(441)};
              height: fit-content;

              ${theme.media.mq(1090)`
                margin-top: ${rem(25)};
              `}

              ${theme.media.mq(600)`
                width: 100%;
             `}

              h4 {
                display: flex;
                align-items: center;
                padding-bottom: ${rem(23)};
                margin-bottom: ${rem(25)};
                border-bottom: ${rem(1)} solid #546e7a;

                font-size: ${rem(24)};
                color: ${theme.palette.gray200};

                &::before {
                  content: "\\e901";
                  font-family: polgozar;
                  font-size: ${rem(34)};
                  margin-right: ${rem(10)};
                }
              }

              form {
                div {
                  display: flex;
                  flex-wrap: nowrap;
                  margin-bottom: ${rem(26)};
                  align-items: center;
                  justify-content: space-between;

                  &:last-child {
                    margin-bottom: ${rem(50)};
                  }

                  ${theme.media.mq(410)`
                    flex-direction: column;
                    align-items: flex-start;
                  `}

                  label {
                    width: ${rem(104)};
                    font-weight: 300;
                    font-size: ${rem(16)};
                    color: ${theme.palette.gray200};
                    margin: 0;

                    ${theme.media.mq(410)`
                      width: unset;
                    `}
                  }

                  input {
                    width: calc(74% - 20px);
                    height: ${rem(39)};
                    border-radius: ${rem(19.5)};
                    border: none;
                    background: #fff;
                    opacity: 0.26;
                    padding: 0 ${rem(10)};

                    ${theme.media.mq(410)`
                      width: 100%;
                    `}
                  }
                }

                input[type="submit"] {
                  width: 100%;
                  justify-content: center;
                  display: flex;
                  align-items: center;
                  border-radius: ${rem(22)};
                  background: ${theme.palette.primary};
                  border: none;
                  font-size: ${rem(18)};
                  color: ${theme.palette.white};
                  height: ${rem(44)};
                  transition: all 0.5s;

                  &:hover {
                    background-color: ${theme.palette.gray200};
                    color: ${theme.palette.primary};
                  }
                }
              }
            }

            .text_content {
              margin-right: ${rem(70)};

              ${theme.media.mq(1090)`
                width: 100%;
                margin-right: unset;
              `}

              ${theme.media.mq(400)`
                text-align: center;
              `}

              h4 {
                font-size: ${rem(25)};
                color: ${theme.palette.gray200};
                margin-bottom: ${rem(13)};
              }

              p {
                font-weight: 300;
                max-width: ${rem(972)};
                font-size: ${rem(17)};
                text-align: left;
                color: ${theme.palette.gray200};
                line-height: ${rem(40)};

                ${theme.media.mq(1090)`
                  width: 100%;
                `}

                ${theme.media.mq(400)`
                  text-align: center;
                `}
              }
            }
          }
        }
      }

      .btns_section {
        padding: ${rem(26)} 0;

        .content {
          display: flex;
          justify-content: flex-end;

          ${theme.media.mq(768)`
            justify-content: center;
          `}

          ${theme.media.mq(400)`
            flex-direction: column;
          `}

          button {
            outline: unset;
            width: ${rem(172)};
            height: ${rem(52)};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: ${rem(26)};
            background: rgba(255, 255, 255, 0.75);
            border: none;
            font-size: ${rem(18)};
            display: inline-block;
            transition: all 0.5s;

            ${theme.media.mq(400)`
              width: 100%;
            `}
          }

          .save {
            color: ${theme.palette.primary};
            border: ${rem(1)} solid ${theme.palette.primary};

            ${theme.media.mq(400)`
              margin-top: ${rem(20)};
            `}

            &:hover {
              background-color: ${theme.palette.primary};
              color: ${theme.palette.white};
            }
          }

          .discard {
            margin-right: ${rem(8)};
            background: rgba($color: #646463, 0.15);
            color: ${theme.palette.gray2100};

            &:hover {
              background-color: ${theme.palette.gray200};
              color: ${theme.palette.white};
            }
          }
        }
      }
    }

    .group_details {
      margin-top: ${rem(30)};

      .item_main_title {
        h3 {
          font-weight: 500;
          font-size: ${rem(25)};

          &::after {
            content: unset;
          }
        }
      }

      .new_events_coming_up_group_details {
        .item_main_title {
          .more {
            color: #cdd1d3;

            &::after {
              color: #cdd1d3;
            }
          }
        }
      }

      .info_details {
        margin-bottom: ${rem(33)};

        .content {
          padding-bottom: ${rem(33)};
          display: flex;
          justify-content: space-between;
          border-bottom: ${rem(1)} solid #b7b7b772;

          ${theme.media.mq(1420)`
            flex-direction: column;
          `}

          .info {
            .top {
              margin-bottom: ${rem(27)};
              display: flex;

              ${theme.media.mq(992)`
                flex-direction: column;
              `}

              .gallery {
                width: ${rem(590)};
                height: ${rem(314)};
                border-radius: ${rem(15)};
                box-shadow: ${rem(-2)} ${rem(7)} ${rem(10)} rgba(0, 0, 0, 0.16);
                overflow: hidden;
                margin-right: ${rem(17)};
                position: relative;

                ${theme.media.mq(1500)`
                  width: ${rem(490)};
                `}

                ${theme.media.mq(992)`
                  margin-bottom: ${rem(50)};
                  align-self: center;
                `}

                ${theme.media.mq(768)`
                  width: 100%;
                `}

                img {
                  height: 100%;
                  object-fit: cover;
                  width: 100%;
                }

                .back_arrow {
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  width: ${rem(45)};
                  bottom: ${rem(34)};
                  z-index: 1;
                  height: ${rem(44)};
                  background: rgba(255, 255, 255, 0.73);
                  border-radius: 100%;
                  position: absolute;
                  left: ${rem(-23)};
                  cursor: pointer;

                  &::after {
                    content: "\\e909";
                    font-family: polgozar;
                    font-size: ${rem(16)};
                    color: ${theme.palette.black};
                    margin-right: ${rem(3)};
                  }
                }

                .next_arrow {
                  display: flex;
                  align-items: center;
                  justify-content: flex-stert;
                  width: ${rem(45)};
                  z-index: 1;
                  bottom: ${rem(34)};
                  height: ${rem(44)};
                  background: rgba(255, 255, 255, 0.73);
                  border-radius: 100%;
                  position: absolute;
                  right: ${rem(-23)};
                  cursor: pointer;

                  &::after {
                    content: "\\e90b";
                    font-family: polgozar;
                    font-size: ${rem(16)};
                    color: ${theme.palette.black};
                    margin-left: ${rem(3)};
                  }
                }

                .pic_items {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  display: flex;
                  align-items: center;
                  margin: 0 ${rem(-5)};
                  padding: ${rem(9)} 0 ${rem(17)} ${rem(30)};
                  background: linear-gradient(
                    rgba(0, 0, 0, 0.29) 0%,
                    #000 100%
                  );

                  .item {
                    width: ${rem(11)};
                    height: ${rem(78)};
                    border-radius: ${rem(10)};
                    margin: 0 ${rem(5)};
                    overflow: hidden;
                    position: relative;

                    &::after {
                      cursor: pointer;
                      width: ${rem(15)};
                      height: ${rem(15)};
                      background-color: #cee1e9;
                      top: ${rem(5)};
                      right: ${rem(5)};
                      border-radius: ${rem(100)};
                      position: absolute;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      content: "\\e915";
                      font-family: polgozar;
                      font-size: ${rem(15)};
                      color: ${theme.palette.black};
                    }

                    img {
                      object-fit: cover;
                      width: 100%;
                      height: 100%;
                    }
                  }

                  .add {
                    background: transparent;
                    border: ${rem(3)} dashed #a2bfcc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    &::before {
                      content: "\\e91b";
                      font-family: polgozar;
                      font-size: ${rem(28)};
                      color: #a2bfcc;
                    }

                    &:after {
                      content: unset;
                    }
                  }
                }
              }

              .text_content {
                h2 {
                  font-weight: 600;
                  font-size: ${rem(30)};
                  color: ${theme.palette.gray200};
                  margin-bottom: ${rem(9)};

                  ${theme.media.mq(1500)`
                    font-size: ${rem(23)};
                 `}

                  ${theme.media.mq(400)`
                    line-height: ${rem(30)};
                  `}
                }

                h3 {
                  font-weight: 300;
                  font-size: ${rem(23)};
                  color: ${theme.palette.gray200};
                  margin-bottom: ${rem(28)};

                  ${theme.media.mq(1500)`
                    font-size: ${rem(19)};
                  `}
                }

                .map_memmber {
                  display: flex;
                  align-items: center;
                  font-size: ${rem(17)};
                  color: ${theme.palette.blue100};
                  margin-bottom: ${rem(24)};

                  ${theme.media.mq(1500)`
                    font-size: ${rem(15)};
                  `}

                  div {
                    display: flex;
                    align-items: center;
                  }

                  .map {
                    margin-right: ${rem(80)};

                    &::before {
                      content: "\\e920";
                      font-family: polgozar;
                      font-size: ${rem(27)};
                      margin-right: ${rem(5)};
                    }
                  }

                  .memmber {
                    &::before {
                      content: "\\e926";
                      font-family: polgozar;
                      font-size: ${rem(23)};
                      margin-right: ${rem(5)};
                    }
                  }
                }

                .organized {
                  margin-bottom: ${rem(46)};

                  h5 {
                    font-size: ${rem(17)};
                    color: ${theme.palette.blue100};
                    margin-bottom: ${rem(17)};

                    ${theme.media.mq(1500)`
                      font-size: ${rem(15)};
                    `}
                  }

                  ul {
                    display: flex;
                    align-items: center;

                    ${theme.media.mq(1420)`
                      flex-wrap: wrap;
                    `}

                    ${theme.media.mq(425)`
                      flex-direction: column;
                      align-items: flex-start;
                    `}

                    li {
                      padding: ${rem(3)};
                      padding-right: ${rem(14)};
                      border-radius: ${rem(19)};
                      background: rgba(145, 200, 222, 0.35);
                      border: ${rem(3)} solid ${theme.palette.gray100};
                      margin-left: ${rem(-12)};
                      font-weight: 300;
                      font-size: ${rem(12)};
                      color: ${theme.palette.gray200};

                      ${theme.media.mq(425)`
                        margin-left: 0;
                      `}

                      &:first-child {
                        margin-left: 0;
                      }

                      &:last-child {
                        background-color: ${theme.palette.gray100};
                        font-weight: 500;

                        ${theme.media.mq(1420)`
                          margin-left: 0;
                        `}

                        span {
                          font-weight: 900;
                        }
                      }

                      img {
                        width: ${rem(32)};
                        height: ${rem(32)};
                        border-radius: ${rem(50)};
                        margin-right: ${rem(4)};
                      }

                      a {
                        color: ${theme.palette.gray200};
                      }
                    }
                  }
                }

                .pay_type {
                  display: flex;
                  align-items: center;

                  ${theme.media.mq(440)`
                    flex-direction: column;
                    align-items: flex-start;
                  `}

                  label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    position: relative;

                    ${theme.media.mq(1500)`
                      font-size: ${rem(15)};
                    `}

                    span {
                      margin: 0 ${rem(9)} 0 ${rem(18)};
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      width: ${rem(62)};
                      height: ${rem(37)};
                      border-radius: ${rem(10)};
                    }

                    .stripe {
                      background: linear-gradient(
                        to right,
                        #704eff 0%,
                        #568df5 100%
                      );
                    }

                    .zarinpal {
                      background: linear-gradient(#ffdb79 0%, #ffb045 100%);
                    }

                    input {
                      cursor: pointer;
                      opacity: 0;
                    }

                    input:checked ~ .checkbox {
                      &::after {
                        content: "\\e910";
                      }
                    }

                    .checkbox {
                      width: ${rem(24)};
                      height: ${rem(24)};
                      position: absolute;
                      background-color: transparent;
                      border-radius: ${rem(2)};
                      left: ${rem(-18)};
                      border: ${rem(1)} solid #a2bfcc;

                      &::after {
                        font-family: polgozar;
                        color: #a2bfcc;
                        font-size: ${rem(13)};
                      }
                    }

                    &:first-child {
                      margin-right: ${rem(60)};

                      ${theme.media.mq(440)`
                        margin-right: 0;
                        margin-bottom: ${rem(30)};
                      `}
                    }
                  }
                }
              }
            }

            .description {
              ${theme.media.mq(400)`
                text-align: center;
              `}

              h4 {
                font-size: ${rem(24)};
                color: ${theme.palette.gray200};
              }

              p {
                font-weight: 300;
                font-size: ${rem(19)};
                color: ${theme.palette.gray200};
                line-height: ${rem(23)};
                margin-top: ${rem(8)};

                ${theme.media.mq(1500)`
                  font-size: ${rem(15)};
                `}
              }
            }
          }

          .btns {
            display: flex;
            flex-direction: column;

            ${theme.media.mq(1420)`
              flex-direction: row;
              justify-content: space-between;
              margin-top: ${rem(25)};
            `}

            ${theme.media.mq(768)`
              flex-direction: column;
              align-items: center;
            `}

            button {
              border: none;
              border-radius: ${rem(50)};
              font-size: ${rem(18)};
              padding: ${rem(15)} 0;
              outline: none;
              transition: all 0.4s;

              ${theme.media.mq(1500)`
                font-size: ${rem(15)};
                padding: ${rem(10)} 0;
              `}
            }

            .del__save {
              display: flex;
              align-items: center;

              ${theme.media.mq(1700)`
                flex-direction: column-reverse;
              `}

              ${theme.media.mq(1420)`
                flex-direction: row;
              `}

              ${theme.media.mq(400)`
                flex-direction: column;
              `}

              .dell {
                margin-right: ${rem(15)};
                background: rgba(100, 100, 99, 0.14);
                color: ${theme.palette.gray2100};
                width: ${rem(151)};

                ${theme.media.mq(1700)`
                  margin-right: 0px;
                  margin-top: ${rem(20)};
                `}

                ${theme.media.mq(1420)`
                  margin-right: ${rem(20)};
                  margin-top: 0px;
                `}

                ${theme.media.mq(400)`
                  margin-right: 0px;
                  margin-bottom: ${rem(20)};
                `}

                &:hover {
                  background-color: ${theme.palette.gray200};
                  color: ${theme.palette.white};
                }
              }

              .save {
                color: ${theme.palette.white};
                width: ${rem(182)};
                background-color: ${theme.palette.primary};

                &:hover {
                  background-color: ${theme.palette.gray200};
                  color: ${theme.palette.white};
                }
              }
            }

            .choose {
              margin-top: ${rem(101)};
              align-self: flex-end;
              width: ${rem(182)};
              background: transparent;
              border: ${rem(1)} solid ${theme.palette.blue600};
              color: ${theme.palette.blue600};

              ${theme.media.mq(1420)`
                margin-top: 0px;
              `}

              ${theme.media.mq(768)`
                align-self: center;
                margin-top: ${rem(30)};
              `}

              &:hover {
                border: ${rem(1)} solid ${theme.palette.primary};
                background-color: ${theme.palette.primary};
                color: ${theme.palette.white};
              }
            }
          }
        }
      }

      .donated_list {
        border-bottom: none;

        .content {
          padding-top: ${rem(33)};
          border-top: ${rem(1)} solid #b7b7b772;

          .item_main_title {
            width: 100%;

            .right {
              display: flex;
              align-items: center;

              ${theme.media.mq(600)`
                flex-direction: column-reverse;
              `}

              button {
                border-radius: ${rem(25)};
                border: none;
                margin-right: ${rem(14)};
                padding: ${rem(15)} ${rem(32)};
                background: #ff7b99;
                font-size: ${rem(18)};
                color: ${theme.palette.white};
                transition: all 0.5s;

                ${theme.media.mq(1500)`
                  padding: ${rem(10)} ${rem(32)};
                  font-size: ${rem(15)};
                `}

                ${theme.media.mq(600)`
                  margin-top: ${rem(25)};
                  margin-bottom: ${rem(35)};
                `}

                &:hover {
                  background-color: ${theme.palette.gray200};
                }
              }
            }
          }

          .items {
            .item {
              background-color: rgba(#91c8de, 0.35);
            }
          }
        }
      }

      .group_details_save_footer {
        background: linear-gradient(to left, #eee 0%, #cee1e9 100%);

        .content {
          padding: ${rem(17)} 0 ${rem(28)};
          display: flex;
          justify-content: space-between;
          align-items: center;

          ${theme.media.mq(768)`
            flex-direction: column;
            text-align: center;
          `}

          .texts {
            ${theme.media.mq(768)`
              margin-bottom: ${rem(38)};
            `}

            h4 {
              font-weight: 600;
              font-size: ${rem(30)};
              color: ${theme.palette.gray200};
              margin-bottom: ${rem(13)};

              ${theme.media.mq(1500)`
                font-size: ${rem(23)};
              `}

              ${theme.media.mq(768)`
                margin-bottom: ${rem(15)};
              `}

              ${theme.media.mq(450)`
                font-size: ${rem(22)};
              `}
            }

            h6 {
              font-weight: 300;
              font-size: ${rem(23)};
              color: ${theme.palette.gray200};

              ${theme.media.mq(1500)`
                font-size: ${rem(17)};
              `}
            }
          }

          button {
            padding: ${rem(15)} ${rem(27)};
            border-radius: ${rem(26)};
            background: ${theme.palette.primary};
            border: none;
            font-size: ${rem(18)};
            color: ${theme.palette.white};
            outline: unset;
            transition: all 0.5s;

            ${theme.media.mq(1500)`
              font-size: ${rem(15)};
              padding: ${rem(12)} ${rem(27)};
            `}

            &:hover {
              background-color: ${theme.palette.gray200};
            }
          }
        }
      }
    }

    .Btn_admin_menu_group {
      display: none;
      outline: none;
      background: #606060;
      position: absolute;
      top: ${rem(100)};
      z-index: 50;
      width: ${rem(80)};
      height: ${rem(80)};
      border-radius: ${rem(80)};
      color: ${theme.palette.white};
      left: ${rem(-47)};
      text-align: end;
      border: none;

      ${theme.media.mq(992)`
        display: inline-block;
      `}

      svg {
        width: ${rem(59)};
        margin-left: ${rem(25)};
        height: ${rem(22)};
        transform: rotate(90deg);
        fill: ${theme.palette.white};
      }
    }

    .modal {
      padding-top: ${rem(130)};
      backdrop-filter: blur(44.86629867553711px);
      --webkit-backdrop-filter: blur(44.86629867553711px);
      background-color: rgba(255, 255, 255, 0.16);
    }

    .modal-dialog {
      max-width: fit-content !important;
      margin: 0 auto;
    }

    .modal-content {
      display: block;
      background: transparent;
      /* Note: currently only Safari supports backdrop-filter */
      backdrop-filter: blur(44.86629867553711px);
      --webkit-backdrop-filter: blur(44.86629867553711px);
      // background-color: rgba(63, 63, 63, 0.6);
      background-color: #5b5b5f;
      /* (plus shape's fill blended on top as a separate layer with 42.62% opacity) */
      padding: ${rem(20)} ${rem(50)} ${rem(46)};
      border: unset;
      border-radius: ${rem(10)};
      width: ${rem(611)};

      background-image: url(../img/bg/modal_bg.svg);
      background-repeat: no-repeat;
      background-position-y: ${rem(116)};

      ${theme.media.mq(600)`
        width: 100%;
      `}

      background-image: unset;

      ${theme.media.mq(400)`
        padding: ${rem(20)} ${rem(15)} ${rem(46)};
      `}

      .modal-header {
        border-bottom: unset;
        padding: unset;

        .modal-title {
          font-weight: bold;
          font-size: ${rem(26)};
          color: ${theme.palette.primary};
        }
      }

      .modal-body {
        padding: unset;

        label {
          font-weight: 500;
          font-size: ${rem(20)};
          text-align: left;
          color: ${theme.palette.white};
        }

        input {
          background-color: rgba(${theme.palette.white}, 0.26);
          outline: none;
          border: none;
          border-radius: ${rem(24)};
          height: ${rem(56)};
          margin-bottom: ${rem(25)};
          padding: 0px ${rem(16)};
        }

        form {
          .photo_capture {
            display: flex;
            align-items: center;
            justify-content: center;

            .pic {
              display: flex;
              align-items: center;
              justify-content: center;
              width: ${rem(115)};
              height: ${rem(115)};
              background: ${theme.palette.gray300};
              border-radius: 50%;
              position: relative;

              &::after {
                content: "\\e926";
                font-family: polgozar;
                font-size: ${rem(50)};
                color: ${theme.palette.pink100_a};
              }

              .btn {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${rem(45)};
                height: ${rem(45)};
                background: ${theme.palette.pink100_a};
                border-radius: 50%;
                right: ${rem(-3)};
                bottom: ${rem(-10)};
                border: ${rem(5)} solid ${theme.palette.gray400_a};

                &::before {
                  content: "\\e928";
                  font-family: polgozar;
                  font-size: ${rem(25)};
                  color: ${theme.palette.gray200};
                }

                &::after {
                  content: "Please add your photo here";

                  width: ${rem(300)};
                  height: ${rem(18)};
                  position: absolute;
                  left: ${rem(46)};
                  top: ${rem(8)};
                  font-weight: 500;
                  font-size: ${rem(14)};
                  text-align: left;
                  color: ${theme.palette.pink100_a};

                  ${theme.media.mq(565)`
                    top: 100%;
                    left: ${rem(-80)};
                  `}
                }
              }
            }
          }

          .nameـandـfamilyـname {
            margin-top: ${rem(30)};
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            ${theme.media.mq(550)`
              flex-wrap: wrap;
            `}

            div {
              width: calc(50% - 14px);

              ${theme.media.mq(550)`
                width: 100%;
              `}

              input {
                width: 100%;
              }
            }
          }

          .phone_number,
          .email,
          .password,
          .Confirm_Password {
            display: flex;
            flex-direction: column;
          }

          .button_form {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: ${rem(43)};

            .submit {
              outline: none;
              border: none;
              padding: ${rem(15)} ${rem(24)};
              background-color: ${theme.palette.primary};
              color: ${theme.palette.white};
              border-radius: ${rem(100)};
              transition: all 0.4s;

              &:hover {
                background-color: ${theme.palette.white};
                color: ${theme.palette.gray200};
              }
            }

            a {
              color: ${theme.palette.primary};
              font-weight: 500;
              font-size: ${rem(18)};
            }
          }
        }
      }
    }
  `}
`;
