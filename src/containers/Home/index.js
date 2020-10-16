import React, { Component } from "react";
import styled, { css } from "styled-components";
import Bg from "assets/images/bg.jpg";
import Logo from "assets/images/logo-light.svg";
import ZCalendar from "./zCalendar";

class Home extends Component {
  render() {
    return (
      <WrapperStyle>
        <div className="innerContentWrapper">
          <div className="innerCont">
            <div className="logoCont">
              <img src={Logo} alt="" className="logo" />
            </div>
            <h3 className="commingSoon">COMING SOON</h3>
            <ZCalendar />
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
    background-image: url("${Bg}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    ${theme.media.xs`
        font-size: 14px;
    `}
    .innerContentWrapper {
      max-width: 1300px;
      margin: auto;
      position: relative;
      height: 100vh;
    }
    .naborDay {
      font-size: 0.6em;
      color: ${theme.palette.secondary};
    }
    .innerCont {
      padding: 2.5em 1em;
      position: absolute;
      width: 80%;
      margin: auto;
      border-radius: 10px;
      background: linear-gradient(
        94deg,
        rgba(255, 227, 162, 0.5) 0%,
        rgba(24, 86, 111, 0.5) 100%
      );
      background: -moz-linear-gradient(
        94deg,
        rgba(255, 227, 162, 0.5) 0%,
        rgba(24, 86, 111, 0.5) 100%
      );
      background: -o-linear-gradient(
        94deg,
        rgba(255, 227, 162, 0.5) 0%,
        rgba(24, 86, 111, 0.5) 100%
      );
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      .logoCont {
        width: 250px;
        margin: auto;
        padding: 0 2em 1em 2em;
        border-bottom: 1px solid #404e59;
      }
      .commingSoon {
        padding: 0.5em 0;
        font-size: 3em;
        font-weight: 600;
        color: #fff;
      }
      .subscribtionForm {
        form {
          color: #000;
          font-size: 0.9em;
          border-radius: 25px;
          overflow: hidden;
          display: inline-block;
          input {
            border: none;
            box-shadow: none;
            outline: none;
            padding: 0.9em 2em;
            ${theme.media.xs`
                        padding: 0.9em 1em;
                    `}
            &.email {
              width: 300px;
              ${theme.media.xs`
                            width: auto;
                        `}
            }
          }
        }
        .submitBtn {
          background-color: ${theme.palette.secondary};
          transition: all 0.2s;
          font-weight: 500;
          &:hover {
            cursor: pointer;
            background-color: #9acee2;
          }
        }
      }
    }
  `}
`;
