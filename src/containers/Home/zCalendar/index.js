import React, { useState } from "react";
import moment from "moment-jalaali";
import _ from "lodash";
import { Events, ZDays, NaborsDay } from "./data";
import { Icon } from "antd";
import styled, { css } from "styled-components";

const ZCalendar = () => {
  const [dateIdx, setDate] = useState(0);
  const date = moment().add(dateIdx, "day");
  const dayInYear = parseInt(date.format("jDDD"));
  let dayInZMonth = (dayInYear % 30) - 1;
  dayInZMonth = dayInZMonth < 0 ? 29 : dayInZMonth;
  dayInZMonth = dayInYear > 360 ? dayInZMonth + 30 : dayInZMonth;
  const ZDayName = ZDays[dayInZMonth]["en"];
  const isNabor = NaborsDay.includes(dayInZMonth);
  const events = Events[dayInYear];
  return (
    <CalendarCont>
      <div className="dateController">
        <button onClick={() => setDate(dateIdx - 1)}>
          <Icon type="caret-left" />
        </button>
        <button onClick={() => setDate(0)} className="todayBtn">
          Today
        </button>
        <button onClick={() => setDate(dateIdx + 1)}>
          <Icon type="caret-right" />
        </button>
      </div>

      <div className="contentCont">
        <p>{date.format("dddd, MMMM D YYYY")}</p>
        <p>{date.format("jD jMMMM jYYYY")}</p>
        <p>
          {_.capitalize(ZDayName)}{" "}
          {isNabor && <span className="naborDay">(Nabor)</span>}
        </p>
        {!!events && <p>{events.map((e) => e.fr)}</p>}
      </div>
    </CalendarCont>
  );
};
export default ZCalendar;

const CalendarCont = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.primary};
    display: inline-block;
    padding: 2em 5em;
    margin-bottom: 5em;
    margin-top: 1.5em;
    border-radius: 5px;
    -webkit-box-shadow: 0px 21px 42px -11px rgba(255, 179, 0, 1);
    -moz-box-shadow: 0px 21px 42px -11px rgba(255, 179, 0, 1);
    box-shadow: 0px 21px 42px -11px rgba(255, 179, 0, 1);
    min-width: 600px;
    ${theme.media.xs`
                 min-width: initial;
                 padding: 2em 1em;
            `}
    p {
      font-size: 1.5em;
      font-weight: 500;
    }
    .dateController {
      position: relative;
      margin-bottom: 1em;
      position: relative;
      font-weight: 600;
      font-size: 1.2em;
      &:after {
        content: "";
        position: absolute;
        margin: auto;
        bottom: 0;
        width: 50%;
        height: 1px;
        background-color: #fff;
        opacity: 0.6;
        right: 0;
        left: 0;
      }
      button {
        transition: all 0.2s;
        border: none;
        outline: none;
        box-shadow: none;
        padding: 1em;
        &:hover {
          cursor: pointer;
          color: ${theme.palette.primary};
        }
        &.todayBtn {
          padding: 0.2em 2em;
          border-radius: 50px;
          border: 1px solid #ffffff;
          &:hover {
            border-color: ${theme.palette.primary};
          }
        }
      }
    }
  `}
`;
