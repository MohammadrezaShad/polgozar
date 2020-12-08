import React from 'react';

import { Location } from 'components/elements';
import SingleEventVideo from 'components/single-event-video';
import {
  StyledContent,
  StyledDetail,
  StyledText,
  StyledMapWrapper,
  StyledImgWrap,
  StyledImg,
  StyledVideoWrap,
  StyledTitle,
} from './single-event-content.styled';

interface SingleEventContentProp {
  address: { lng: number; lat: number; address: string; city?: string };
  coverPhotoUrl: string;
  description: string;
}
const SingleEventContent = ({ address, coverPhotoUrl, description }: SingleEventContentProp) => {
  return (
    <>
      <StyledContent>
        <StyledTitle>Details</StyledTitle>
        <StyledText>{description}</StyledText>
      </StyledContent>
      <StyledDetail>
        <StyledImgWrap>
          <StyledImg src={coverPhotoUrl} />
        </StyledImgWrap>
        <StyledMapWrapper>
          <Location loactionDetail={address} />
        </StyledMapWrapper>
        <StyledVideoWrap>
          <SingleEventVideo />
        </StyledVideoWrap>
      </StyledDetail>
    </>
  );
};

export default SingleEventContent;
