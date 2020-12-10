import React, { useState } from 'react';
import { Modal } from 'components/elements';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import BgImage from 'assets/images/intro_bg.jpg';
import { StyledWrapper, StyledArrow, StyledSlider, StyledImg, StyledThumbSlider } from './albumSlider.styled';

SwiperCore.use([Navigation, Thumbs]);
interface Photos {
  id: string;
  url: string;
}
interface PhotosProp {
  photos: Photos[];
}
interface AlbumSliderProp extends PhotosProp {
  showSlider: boolean;
  toggleSlider: () => void;
}

const AlbumSlider = ({ showSlider, toggleSlider, photos }: AlbumSliderProp) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Modal centered width="70%" title="Pictures" visible={showSlider} onCancel={toggleSlider}>
        <StyledWrapper>
          <StyledSlider>
            <Swiper
              id="AlbumSlider"
              thumbs={{ swiper: thumbsSwiper }}
              navigation={{
                nextEl: '.nextElm',
                prevEl: '.prevElm',
              }}
            >
              {photos.map(({ id, url }) => {
                return (
                  <SwiperSlide key={id}>
                    <StyledImg src={url} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <StyledArrow className="nextElm">
              <i className="icon-arrow-right" />
            </StyledArrow>
            <StyledArrow className="prevElm">
              <i className="icon-arrow-left" />
            </StyledArrow>
          </StyledSlider>
          <StyledThumbSlider>
            <Swiper id="thumbs" setWrapperSize slidesPerView={5} spaceBetween={5} onSwiper={setThumbsSwiper}>
              {photos.map(({ id, url }) => {
                return (
                  <SwiperSlide key={id}>
                    <StyledImg src={url} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </StyledThumbSlider>
        </StyledWrapper>
      </Modal>
    </>
  );
};

export default AlbumSlider;
