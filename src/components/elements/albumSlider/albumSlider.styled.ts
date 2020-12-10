import { radius, colors, fontSize, spacer } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 75vh;
`;

export const StyledSlider = styled.div`
  position: relative;
  margin: 0 auto;
  height: 80%;
  display: flex;
  padding-top: ${spacer.xl};
  padding-bottom: ${spacer.xl};
  .swiper-container {
    height: 100%;
  }
`;

export const StyledThumbSlider = styled.div`
  position: relative;
  display: flex;
  height: 20%;

  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper {
    width: 50%;
  }
  .swiper-slide {
    text-align: center;
    width: auto;
  }
  .slide-image {
    height: 400px;
    width: auto;
  }
  .my-gallery figure {
    margin: 0px;
  }
`;

export const StyledItem = styled.div`
  display: inline-flex;
`;

export const StyledArrow = styled.div`
  border: 1px solid ${colors.gray1600};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  &.nextElm {
    right: 0;
  }
  &.prevElm {
    left: 0;
  }
  i {
    color: ${colors.gray1600};
    font-size: ${fontSize.xl};
    transform: translateY(5%);
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  margin: 0 auto;
  border-radius: ${radius.mlg};
  overflow: hidden;
`;

export const StyledThumbImg = styled.img`
  object-fit: cover;
  height: 100%;
  padding: 0 380px;
  margin: 0 auto;
  border-radius: ${radius.mlg};
  overflow: hidden;
`;
