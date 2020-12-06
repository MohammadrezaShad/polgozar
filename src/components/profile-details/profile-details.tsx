import React from 'react';
import { Avatar, Stars } from 'components/elements';
import { Input } from 'antd';
import {
  StyledWrapper,
  StyledImgWrap,
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
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  loaction?: string;
  birthday?: string;
  editIntroduction: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileDetails = ({
  avatarUrl,
  firstName,
  lastName,
  loaction,
  editIntroduction,
  birthday,
  handleChange,
}: ProfileDetailsProp) => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <StyledStar>
          <Stars rate={3} />
        </StyledStar>
        <StyledTextWrap>
          {editIntroduction ? (
            <Input onChange={handleChange} name="firstName" value={firstName} />
          ) : (
            <StyledName>{firstName}</StyledName>
          )}

          {editIntroduction ? (
            <Input onChange={handleChange} name="lastName" value={lastName} />
          ) : (
            <StyledNameBold>{lastName}</StyledNameBold>
          )}
        </StyledTextWrap>
      </StyledBlock>
      <StyledBlock>
        <StyledInfo>
          <i className="icon-pin" />
          <StyledText>Location :</StyledText>
          {editIntroduction ? (
            <Input onChange={handleChange} name="location" value={loaction} />
          ) : (
            <StyledName>{loaction}</StyledName>
          )}
        </StyledInfo>
        <StyledInfo>
          <i className="icon-birthday" />
          <StyledText>Birthday :</StyledText>
          {editIntroduction ? (
            <Input onChange={handleChange} name="birthday" value={birthday} />
          ) : (
            <StyledSubText>{birthday}</StyledSubText>
          )}
        </StyledInfo>
        <StyledInfo>
          <i className="icon-calendar2" />
          <StyledText>Joined date : </StyledText>
          <StyledSubText>1. Sep. 2019</StyledSubText>
        </StyledInfo>
      </StyledBlock>
      <StyledImgWrap>
        <Avatar avatarUrl={avatarUrl} />
      </StyledImgWrap>
    </StyledWrapper>
  );
};

export default ProfileDetails;
