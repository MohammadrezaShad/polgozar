import Card from 'components/elements/card';
import React from 'react';
import { breakpoints } from 'settings/style';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StyledWrapper, StyledItem, StyledTitle } from './sliderList.styled';

interface Photos {
  id?: string;
  url?: string;
  coverPhotoUrl?: string;
}
interface EventListProp {
  photos: Photos[];
  title?: string;
}
const sliderBreakpoints = {
  [breakpoints.xs]: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  [breakpoints.lg]: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  [breakpoints.lg]: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  [breakpoints.xl]: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};

const EventList = ({ photos = [], title }: EventListProp) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <Swiper spaceBetween={20} breakpoints={sliderBreakpoints}>
        {photos.map(({ id, url, coverPhotoUrl }) => {
          return (
            <SwiperSlide key={id}>
              <StyledItem>
                <Card url={url || coverPhotoUrl} />
              </StyledItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledWrapper>
  );
};

export default EventList;
