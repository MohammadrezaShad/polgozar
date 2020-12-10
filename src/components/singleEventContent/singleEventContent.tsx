import React from 'react';

import { Location } from 'components/elements';
import SingleEventVideo from 'components/singleEventVideo';
import {
  StyledContent,
  StyledDetail,
  StyledText,
  StyledMapWrapper,
  StyledImgWrap,
  StyledImg,
  StyledVideoWrap,
  StyledTitle,
} from './singleEventContent.styled';

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
        <StyledImgWrap coverPhotoUrl={coverPhotoUrl} />
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
