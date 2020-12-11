import React from 'react';

import StarRating from 'components/elements/star-rating/star-rating';
import { Button } from 'components/elements';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import {
  StyledWrapper,
  StyledHead,
  StyledHeadTop,
  StyledHeadContent,
  StyledHeadBottom,
  StyledDescription,
  StyledTitle,
  StyledDescriptionText,
  StyledDescriptionButton,
  StyledImg,
  StyledContainer,
  StyledHeadTopWrap,
  StyledHeadTopText,
  StyledStar,
  StyledHeadTopSubText,
  StyledHeadTopContainer,
  StyledHeadContentText,
  StyledHeadContentListWrap,
  StyledHeadContentList,
  StyledHeadContentListText,
  StyledAvatar,
  StyledHeadContentListContainer,
  StyledHeadBottomWrap,
  StyledHeadBottomTag,
  StyledHeadBottomText,
  StyledDescriptionWrap,
  StyledDescriptionButtonWrap,
} from './singleGroupHead.styled';

interface SingleGroupHeadProp {
  coverPhotoUrl?: string;
  description?: string;
  organizers?: any[];
  members?: any[];
  city?: string;
}
const SingleGroupHead = ({ coverPhotoUrl, description, organizers = [], members = [], city }: SingleGroupHeadProp) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledImg coverPhotoUrl={coverPhotoUrl} />
        <StyledHead>
          <StyledHeadTop>
            <StyledHeadTopWrap>
              <StyledHeadTopContainer>
                <StyledHeadTopText>Bachehaye khoshhal Iran</StyledHeadTopText>
                <StyledStar>
                  <StarRating rate={3} />
                </StyledStar>
              </StyledHeadTopContainer>
              <StyledHeadTopSubText>Ravanshad</StyledHeadTopSubText>
            </StyledHeadTopWrap>
          </StyledHeadTop>
          <StyledHeadContent>
            <StyledHeadContentText>Organized by :</StyledHeadContentText>

            <StyledHeadContentListWrap>
              {organizers.slice(0, 3).map(({ id, lastname, firstname, avatarUrl }) => {
                return (
                  <StyledHeadContentListContainer key={id}>
                    <StyledHeadContentList>
                      {avatarUrl ? (
                        <StyledAvatar avatarUrl={avatarUrl} />
                      ) : (
                        <Avatar size={42} icon={<UserOutlined />} />
                      )}
                      <StyledHeadContentListText>
                        {firstname} {lastname}
                      </StyledHeadContentListText>
                    </StyledHeadContentList>
                  </StyledHeadContentListContainer>
                );
              })}
              {organizers.length - 3 <= 0 ? null : (
                <StyledHeadContentListContainer>And {organizers.length - 3} others</StyledHeadContentListContainer>
              )}
            </StyledHeadContentListWrap>
          </StyledHeadContent>
          <StyledHeadBottom>
            <StyledHeadBottomWrap>
              <i className="icon-pin" />
              <StyledHeadBottomTag>Location:</StyledHeadBottomTag>
              <StyledHeadBottomText>{city}</StyledHeadBottomText>
            </StyledHeadBottomWrap>
            <StyledHeadBottomWrap>
              <i className="icon-user" />
              <StyledHeadBottomTag>Members :</StyledHeadBottomTag>
              <StyledHeadBottomText>{members.length}</StyledHeadBottomText>
            </StyledHeadBottomWrap>
          </StyledHeadBottom>
        </StyledHead>
      </StyledContainer>
      <StyledDescription>
        <StyledDescriptionWrap>
          <StyledTitle>Description </StyledTitle>
          <StyledDescriptionText>{description}</StyledDescriptionText>
          <StyledDescriptionButton>
            <Button color="accent" shape="link" onClick={() => {}}>
              Read More
            </Button>
          </StyledDescriptionButton>
        </StyledDescriptionWrap>
        <StyledDescriptionButtonWrap>
          <Button size="lg" onClick={() => {}} color="danger">
            Join to this group
          </Button>
        </StyledDescriptionButtonWrap>
      </StyledDescription>
    </StyledWrapper>
  );
};

export default SingleGroupHead;
