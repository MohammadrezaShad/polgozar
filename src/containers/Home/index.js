import React, { Component } from "react";
import styled, { css } from "styled-components";
import Bg from "assets/images/bg.jpg";
import Logo from "assets/images/logo-light.svg";
import moment from "moment-jalaali";
import { Icon } from "antd";
import _ from "lodash";

const ZDays = [
  { en: "urmazd", fr: "اورمزد" },
  { en: "vahman", fr: "بهمن" },
  { en: "ardibehesht", fr: "اردیبهشت" },
  { en: "shahrivar", fr: "شهریور" },
  { en: "spandarmaz", fr: "سپندارمذ" },
  { en: "khordad", fr: "خرداد" },
  { en: "amordad", fr: "امرداد" },
  { en: "dey be azar", fr: "دی به آذر" },
  { en: "azar", fr: "آذر" },
  { en: "aban", fr: "آبان" },
  { en: "khor(khir)", fr: "خور" },
  { en: "mah", fr: "ماه" },
  { en: "tir", fr: "تیر" },
  { en: "goosh", fr: "گوش" },
  { en: "dey be mehr", fr: "دی به مهر" },
  { en: "mehr", fr: "مهر" },
  { en: "soroush", fr: "سروش" },
  { en: "rashn", fr: "رشن" },
  { en: "farvardin", fr: "فروردین" },
  { en: "verahram", fr: "ورهرام" },
  { en: "ram", fr: "رام" },
  { en: "bad", fr: "یاد" },
  { en: "dey be din", fr: "دی بدین" },
  { en: "din", fr: "دین" },
  { en: "ard ", fr: "ارد" },
  { en: "ashtad", fr: "اشتاد" },
  { en: "asman", fr: "آسمان" },
  { en: "zamiyad", fr: "زامیاد" },
  { en: "mantraspand", fr: "مانترسپند" },
  { en: "anaram", fr: "انارام" }
];
const extraZdays = [
  { en: "ahnavad", fr: "اهنود" },
  { en: "oshtavad", fr: "اشتود" },
  { en: "sepantamad", fr: "سپنتمد" },
  { en: "vahookhashatr", fr: "وهوخشتر" },
  { en: "vahooshtoesh", fr: "وهشتواش" }
];
const NaborsDay = [1, 11, 13, 20];
class Home extends Component {
  state = {
    dateIdx: 0
  };
  setDate = idx => {
    this.setState({ dateIdx: idx });
  };
  render() {
    const { dateIdx } = this.state;
    const date = moment().add(dateIdx, "day");
    const dayInYear = parseInt(date.format("jDDD"));
    const ZDayName = dayInYear > 360 ? extraZdays[dayInYear % 5] : ZDays[dayInYear % 30];
    const isNabor = NaborsDay.includes(ZDayName);
    console.log(dayInYear, "sffsakgjha");
    return (
      <WrapperStyle>
        <div className="innerContentWrapper">
          <div className="innerCont">
            <div className="logoCont">
              <img src={Logo} alt="" className="logo" />
            </div>
            <h3 className="commingSoon">COMING SOON</h3>
            <div className="calendarCont">
              <div className="dateController">
                <button onClick={() => this.setDate(dateIdx - 1)}>
                  <Icon type="caret-left" />
                </button>
                <button onClick={() => this.setDate(0)} className="todayBtn">
                  Today
                </button>
                <button onClick={() => this.setDate(dateIdx + 1)}>
                  <Icon type="caret-right" />
                </button>
              </div>

              <div className="contentCont">
                <p>{date.format("dddd, MMMM D YYYY")}</p>
                <p>{date.format("jD jMMMM jYYYY")}</p>
                <p>
                  {_.capitalize(ZDayName)} {isNabor && <span className="naborDay">(Nabor)</span>}
                </p>
              </div>
            </div>
            <div className="subscribtionForm">
              <form
                action="https://gmail.us20.list-manage.com/subscribe/post?u=fc29e5a1d31ba746a460139cc&amp;id=2bb6ad23d9"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Email address"
                  required
                />
                <input
                  type="submit"
                  value="NOTIFY ME"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="submitBtn"
                />
                <input
                  style={{ display: "none" }}
                  type="text"
                  name="b_fc29e5a1d31ba746a460139cc_2bb6ad23d9"
                  tabIndex="-1"
                />
              </form>
            </div>
          </div>
        </div>
      </WrapperStyle>
    );
  }
}
export default Home;

const WrapperStyle = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-image: url('${Bg}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    ${theme.media.xs`
        font-size: 14px;
    `}
    .innerContentWrapper{
        max-width: 1300px;
        margin: auto;
        position:relative;
        height: 100vh;
    }
    .naborDay{
      font-size: 0.6em;
      color: ${theme.palette.secondary};
    }
    .innerCont{
        padding: 2.5em 1em;
        position: absolute;
        width: 80%;
        margin: auto;
        border-radius: 10px;
        background: linear-gradient(94deg, rgba(255,227,162,0.5) 0%, rgba(24,86,111,0.5) 100%);
        background: -moz-linear-gradient(94deg, rgba(255,227,162,0.5) 0%, rgba(24,86,111,0.5) 100%);
        background: -o-linear-gradient(94deg, rgba(255,227,162,0.5) 0%, rgba(24,86,111,0.5) 100%);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        .logoCont{
            width: 250px;
            margin: auto;
            padding: 0 2em 1em 2em;
            border-bottom: 1px solid #404e59;
        }
        .commingSoon{
            padding: 0.5em 0;
            font-size: 3em;
            font-weight: 600;
            color: #fff;
        }
        .subscribtionForm{
            form{
                color: #000;
                font-size: 0.9em;
                border-radius: 25px;
                overflow: hidden;
                display: inline-block;
                input{
                    border: none;
                    box-shadow: none;
                    outline: none;
                    padding: 0.9em 2em;
                    ${theme.media.xs`
                        padding: 0.9em 1em;
                    `}
                    &.email{
                        width: 300px;
                        ${theme.media.xs`
                            width: auto;
                        `}
                    }
                }
            }
            .submitBtn{
                background-color: ${theme.palette.secondary};
                transition: all 0.2s;
                font-weight: 500;
                &:hover{
                    cursor: pointer;
                    background-color: #9acee2;
                }
            }
        }
        .calendarCont{
            border: 1px solid ${theme.palette.primary};
            display: inline-block;
            padding: 2em 5em;
            margin-bottom: 5em;
            margin-top: 1.5em;
            border-radius: 5px;
            -webkit-box-shadow: 0px 21px 42px -11px rgba(255,179,0,1);
            -moz-box-shadow: 0px 21px 42px -11px rgba(255,179,0,1);
            box-shadow: 0px 21px 42px -11px rgba(255,179,0,1);
            min-width: 600px;
            ${theme.media.xs`
                 min-width: initial;
                 padding: 2em 1em;
            `}
            p{
                font-size: 1.5em;
                font-weight: 500;
            }
            .dateController{
                position: relative;
                margin-bottom: 1em;
                position: relative;
                font-weight: 600;
                font-size: 1.2em;
                &:after{
                    content:'';
                    position: absolute;
                    margin: auto;
                    bottom: 0;
                    width: 50%;
                    height: 1px;
                    background-color: #fff;
                    opacity: 0.6;
                    right:0;
                    left: 0;
                }
                button{
                    transition: all 0.2s;
                    border: none;
                    outline: none;
                    box-shadow: none;
                    padding: 1em;
                    &:hover{
                        cursor: pointer;
                        color: ${theme.palette.primary};
                    }
                    &.todayBtn{
                      padding: 0.2em 2em;
                      border-radius: 50px;  
                      border: 1px solid #ffffff;
                      &:hover{
                        border-color: ${theme.palette.primary};
                      }
                    }
                }
            }
        }
  `}
`;
