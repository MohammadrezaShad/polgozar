import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Bg from 'assets/images/bg.jpg';
import Logo from 'assets/images/logo-light.svg';
import moment from 'moment-jalaali';
import { Icon } from 'antd';

class Home extends Component {
  state = {
    dateIdx: 0
  };
  setDate = idx => {
    this.setState({ dateIdx: idx });
  };
  render() {
    const { dateIdx } = this.state;
    const date = moment().add(dateIdx, 'day');
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
                <p>{date.format('dddd, MMMM D YYYY')}</p>
                <p>{date.format('jD jMMMM jYYYY')}</p>
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
                  style={{ display: 'none' }}
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
                        padding: 1em 2em;
                    }
                }
            }
        }
  `}
`;
