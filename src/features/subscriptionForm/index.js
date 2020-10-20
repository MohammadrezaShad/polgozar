import React from "react";
import styled, { css } from "styled-components";

const SubscriptionForm = () => {
  return (
    <SubscriptionFormCont>
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
    </SubscriptionFormCont>
  );
};

const SubscriptionFormCont = styled.div`
  ${({ theme }) => css`
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
  `}
`;

export default SubscriptionForm;
