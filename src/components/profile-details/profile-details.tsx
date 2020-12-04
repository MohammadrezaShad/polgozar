import React from 'react';

import { Stars } from 'components/elements';
import {
  StyledWrapper,
  StyledImgWrap,
  StyledImgContainer,
  StyledImg,
  StyledStar,
  StyledBlock,
  StyledName,
  StyledInfo,
  StyledText,
  StyledSubText,
  StyledNameBold,
  StyledTextWrap,
} from './profile-details.styled';

interface ProfileDetailsProp {
  avatarUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loaction?: string | null;
}

const ProfileDetails = ({ avatarUrl, firstName, lastName, loaction }: ProfileDetailsProp) => {
  const imgRender = (): JSX.Element => {
    if (avatarUrl) {
      return <StyledImg alt="img" avatarUrl={avatarUrl} src={avatarUrl} />;
    }
    return <StyledImg alt="img" src="" />;
  };

  return (
    <StyledWrapper>
      <StyledBlock>
        <StyledStar>
          <Stars rate={3} items={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]} />
        </StyledStar>
        <StyledTextWrap>
          <StyledName>{firstName}</StyledName>
          <StyledNameBold>{lastName}</StyledNameBold>
        </StyledTextWrap>
      </StyledBlock>
      <StyledBlock>
        <StyledInfo>
          <i className="icon-pin" />
          <StyledText>Location :</StyledText>
          <StyledSubText>{loaction}</StyledSubText>
        </StyledInfo>
        <StyledInfo>
          <i className="icon-birthday" />
          <StyledText>Birthday :</StyledText>
          <StyledSubText>24. Mar. 1986</StyledSubText>
        </StyledInfo>
        <StyledInfo>
          <i className="icon-calendar2" />
          <StyledText>Joined date : </StyledText>
          <StyledSubText>1. Sep. 2019</StyledSubText>
        </StyledInfo>
      </StyledBlock>
      <StyledImgWrap>
        <StyledImgContainer>{imgRender()}</StyledImgContainer>
      </StyledImgWrap>
    </StyledWrapper>
  );
};

export default ProfileDetails;
