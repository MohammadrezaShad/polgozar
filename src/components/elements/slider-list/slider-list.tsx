import Card from 'components/elements/card';
import React from 'react';
import { breakpoints } from 'settings/style';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StyledWrapper, StyledItem, StyledTitle } from './slider-list.styled';

interface Photos {
  id: string;
  url: string;
}
interface EventListProp {
  photos: Photos[];
}
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
    slidesPerView: 3,
    spaceBetween: 40,
  },
  [breakpoints.xl]: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};

const EventList = ({ photos = [] }: EventListProp) => {
  return (
    <StyledWrapper>
      <StyledTitle>Relate Events</StyledTitle>
      <Swiper spaceBetween={20} breakpoints={sliderBreakpoints}>
        {photos.map(({ id, url }) => {
          return (
            <SwiperSlide key={id}>
              <StyledItem>
                <Card url={url} />
              </StyledItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledWrapper>
  );
};

export default EventList;
