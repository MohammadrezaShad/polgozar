import React, { useState } from 'react';
import { Modal } from 'components/elements';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import BgImage from 'assets/images/intro_bg.jpg';
import { StyledWrapper, StyledArrow, StyledSlider, StyledImgWrap } from './album-slider.styled';

SwiperCore.use([Navigation, Thumbs]);
interface AlbumSliderProp {
  showSlider: boolean;
  toggleSlider: () => void;
}

const AlbumSlider = ({ showSlider, toggleSlider }: AlbumSliderProp) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];
  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <StyledImgWrap>
          <img src={BgImage} />
        </StyledImgWrap>
      </SwiperSlide>,
    );
  }
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumbs-${i}`}>
        <StyledImgWrap>
          <img src={BgImage} />
        </StyledImgWrap>
      </SwiperSlide>,
    );
  }
  return (
    <>
      <Modal width={1500} title="Pictures" visible={showSlider} onCancel={toggleSlider} destroyOnClose>
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
              {slides}
            </Swiper>
            <StyledArrow className="nextElm">
              <i className="icon-arrow-right" />
            </StyledArrow>
            <StyledArrow className="prevElm">
              <i className="icon-arrow-left" />
            </StyledArrow>
          </StyledSlider>
          <StyledSlider>
            <Swiper id="thumbs" slidesPerView={4} spaceBetween={90} onSwiper={setThumbsSwiper}>
              {thumbs}
            </Swiper>
          </StyledSlider>
        </StyledWrapper>
      </Modal>
    </>
  );
};

export default AlbumSlider;
