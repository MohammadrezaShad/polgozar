import React, { useState } from "react";
import Logo from "assets/images/logo-light.svg";
import styled, { css } from "styled-components";
import {
  radius,
  colors,
  maxWinSize,
  spacer,
  shadow,
  fontSize,
  rgba,
  fontType,
} from "settings/style";
import { Container, Button, Modal, FormItem } from "components/elements";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";

export const GroupCard = ({ group }) => {
  return (
    <GroupCardWrapper img={group.coverPhotoUrl} to="/dsfa">
      <div className="img-cont"></div>
      <div className="content-cont">
        <h4 className="group-name">{group.name}</h4>
        <h5>{group.categories[0].title}</h5>
        <div className="footer">
          <span className="group-members">
            <i className="icon-user" />
            {group.members.length}
          </span>
          <Button
            color="accent"
            type="opacity"
            onClick={(e) => e.preventDefault()}
          >
            Join Now
          </Button>
        </div>
      </div>
    </GroupCardWrapper>
  );
};

export default GroupCard;

const GroupCardWrapper = styled(Link)`
  max-width: 500px;
  background-color: ${colors.white};
  height: 200px;
  display: flex;
  box-shadow: ${shadow.md};
  border-radius: ${radius.md};
  overflow: hidden;
  color: ${colors.font};
  &:hover {
    color: ${colors.font};
    /* box-shadow: ${shadow.lg}; */
  }
  .img-cont {
    flex: 1;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content-cont {
    flex: 2;
    padding: ${spacer.md};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .group-name {
      ${fontType.md}
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .group-members {
        font-size: ${fontSize.lg};
        color: ${colors.primary};
        i {
          padding-right: ${spacer.md};
        }
      }
    }
  }
`;
