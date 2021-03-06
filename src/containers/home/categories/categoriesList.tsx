import React from 'react';
import styled from 'styled-components';
import { radius, colors, breakpoints, spacer, shadow, fontSize, rgba } from 'settings/style';
import { Container } from 'components/elements';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetAllCategoriesQuery } from 'graphql/types';

const sliderBreakpoints = {
  [breakpoints.xs]: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  [breakpoints.lg]: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  [breakpoints.lg]: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  [breakpoints.xl]: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

const CategoriesList = () => {
  const { data } = useGetAllCategoriesQuery();
  return (
    <CategoriesWrapper>
      <Container>
        <div className="item-containers">
          <Swiper spaceBetween={10} slidesPerView={1} breakpoints={sliderBreakpoints}>
            {data &&
              data.categories.map((category) => (
                <SwiperSlide key={category.slug}>
                  <CategoriesItem key={category.slug} img={category.coverPhotoUrl || ''}>
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

interface CategoriesItemProps {
  img: string;
}

const CategoriesItem = styled.div<CategoriesItemProps>`
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
