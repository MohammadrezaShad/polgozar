import { radius, colors, fontSize } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledSlider = styled.div`
  position: relative;

  &:first-child {
    .swiper-container {
      width: 800px;
    }
  }
  &:last-child {
    .swiper-slide {
    }
    width: 100%;
    margin-top: 80px;
  }
`;

export const StyledItem = styled.div``;

export const StyledArrow = styled.div`
  border: 1px solid ${colors.gray1600};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &.nextElm {
    right: 32px;
  }
  &.prevElm {
    left: 32px;
  }
  i {
    color: ${colors.gray1600};
    font-size: ${fontSize.xl};
    transform: translateY(5%);
  }
`;

export const StyledImgWrap = styled.div`
  border-radius: ${radius.mlg};
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;
