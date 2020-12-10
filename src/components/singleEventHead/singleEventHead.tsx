import React from 'react';

import ButtonComponent from 'components/elements/button';
import { Location, SocialMedia, DateTag } from 'components/elements';
import SingleEventVideo from 'components/singleEventVideo';
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
  StyledHeadWrapper,
} from './singleEventHead.styled';

interface SignleEventHeadProp {
  address: { lng: number; lat: number; address: string; city?: string };
  coverPhotoUrl: string;
  title: string;
}

const SignleEventHead = ({ address, coverPhotoUrl, title }: SignleEventHeadProp) => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <StyledHeadImgWrap coverPhotoUrl={coverPhotoUrl} />
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
              <ButtonComponent shape="dark" color="accent" onClick={() => {}}>
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
