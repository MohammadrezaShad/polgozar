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
} from "settings/style";
import { Container, Button, Modal, FormItem } from "components/elements";
import { Row, Col } from "antd";
import { NavLink as Link } from "react-router-dom";
import { getALlCategories } from "graphql/queries/categories";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";

let slidesPerView = 5;
if (maxWinSize("sm")) {
  slidesPerView = 1;
} else if (maxWinSize("md")) {
  slidesPerView = 3;
} else if (maxWinSize("lg")) {
  slidesPerView = 4;
}

export const CategoriesList = () => {
  const { loading, error, data } = useQuery(getALlCategories);
  console.log("xxxx", slidesPerView, loading, error, data);
  return (
    <CategoriesWrapper>
      <Container>
        <div className="item-containers">
          <Swiper
            spaceBetween={40}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data &&
              data.categories.map((category) => (
                <SwiperSlide key={category.slug}>
                  <CategoriesItem
                    key={category.slug}
                    img={category.coverPhotoUrl}
                  >
                    <div className="img-container">
                      <div className="title">{category.title} </div>
                    </div>
                    <div>{category.description}</div>
                  </CategoriesItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </CategoriesWrapper>
  );
};

export default CategoriesList;

const CategoriesWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.05);
  color: ${colors.white};
  .item-containers {
    padding: ${spacer.xl};
  }
  .swiper-container {
    overflow: visible;
  }
`;

const CategoriesItem = styled.div`
  background: ${colors.gray600};
  position: relative;
  min-height: 150px;
  border-radius: ${radius.lg};
  padding: ${spacer.sm};
  font-size: ${fontSize.sm};
  .img-container {
    transition: transform 0.8s ease-in-out;
    border-radius: ${radius.lg};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: ${shadow.md};
    overflow: hidden;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat, repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .title {
      padding: ${spacer.sm} ${spacer.md};
      background-color: ${rgba(colors.gray600, 0.9)};
      border-radius: ${radius.xl};
    }
  }
  &:hover {
    .img-container {
      transform: translateY(-100%);
    }
  }
`;
