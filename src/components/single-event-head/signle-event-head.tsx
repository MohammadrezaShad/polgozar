import React from 'react';

import ButtonComponent from 'components/elements/button';
import { Location } from 'components/elements';
import SocialMedia from 'components/elements/social-media';
import SingleEventVideo from 'components/single-event-video';
import DateTag from 'components/elements/date-tag';
import {
  StyledWrapper,
  StyledBlock,
  StyledButton,
  StyledHeadCard,
  StyledTitle,
  StyledButtonText,
  StyledHeadWrap,
  StyledHeadText,
  StyledHeadTextBold,
  StyledHeadDetail,
  StyledHeadDetailText,
  StyledGuestText,
  StyledGuestCount,
  StyledGuestWrap,
  StyledMapWrapper,
  StyledVideoWrap,
  StyledHeadContent,
  StyledHeadContentWrap,
  StyledHeadContentText,
  StyledHeadContentSubText,
  StyledHeadImgWrap,
  StyledHeadImg,
  StyledHeadWrapper,
} from './single-event-head.styled';

interface SignleEventHeadProp {
  address: { lng: number; lat: number; address: string; city?: string };
  coverPhotoUrl: string;
  title: string;
}

const SignleEventHead = ({ address, coverPhotoUrl, title }: SignleEventHeadProp) => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <StyledHeadImgWrap>
          <StyledHeadImg src={coverPhotoUrl} />
        </StyledHeadImgWrap>
      </StyledBlock>
      <StyledBlock>
        <StyledButton>
          <ButtonComponent shape="opacity" color="font" onClick={() => {}}>
            <i className="icon-calendar-light" />
            <StyledButtonText>22 MAR 2020</StyledButtonText>
          </ButtonComponent>
        </StyledButton>
        <StyledTitle>{title}</StyledTitle>
        <StyledMapWrapper>
          <Location mapSize="md" loactionDetail={address} />
        </StyledMapWrapper>
        <StyledVideoWrap>
          <SingleEventVideo />
        </StyledVideoWrap>
        <StyledHeadContent>
          <StyledHeadContentWrap>
            <StyledHeadContentText>Type of event :</StyledHeadContentText>
            <StyledHeadContentSubText>On place, Virtual</StyledHeadContentSubText>
          </StyledHeadContentWrap>
          <StyledHeadContentWrap>
            <StyledHeadContentText>Organized by :</StyledHeadContentText>
            <StyledHeadContentSubText>Bachehaye khoshhal Iran</StyledHeadContentSubText>
          </StyledHeadContentWrap>
        </StyledHeadContent>
      </StyledBlock>
      <StyledBlock>
        <StyledHeadWrapper>
          <DateTag />
          <StyledHeadCard>
            <StyledHeadWrap>
              <StyledHeadText>Price</StyledHeadText>
              <StyledHeadTextBold>100 $</StyledHeadTextBold>
            </StyledHeadWrap>
            <StyledHeadDetail>
              <StyledGuestWrap>
                <StyledGuestText>Guest :</StyledGuestText>
                <StyledGuestCount>2</StyledGuestCount>
              </StyledGuestWrap>
              <ButtonComponent color="accent" onClick={() => {}}>
                <StyledHeadDetailText>Attend</StyledHeadDetailText>
              </ButtonComponent>
            </StyledHeadDetail>
          </StyledHeadCard>
        </StyledHeadWrapper>
        <SocialMedia />
      </StyledBlock>
    </StyledWrapper>
  );
};

export default SignleEventHead;
