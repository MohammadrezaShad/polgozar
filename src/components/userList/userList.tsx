import React from 'react';

import { Button, ListItem } from 'components/elements';
import {
  StyledHead,
  StyledTitle,
  StyledContent,
  StyledCount,
  StyledWrap,
  StyledItem,
  StyledHeadWrap,
  StyledLinkText,
} from './userList.styled';

interface SingleEventListProp {
  size?: number;
  bgColor?: 'primary' | 'accent100';
  title: string;
}
const SingleEventList = ({ size = 2, bgColor, title }: SingleEventListProp) => {
  return (
    <>
      <StyledHead>
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledHeadWrap bgColor={bgColor}>
            <i className="icon-user" />
            <StyledCount>2</StyledCount>
          </StyledHeadWrap>
        </StyledContent>
        <StyledHeadWrap>
          <Button shape="link" color="font" onClick={() => {}}>
            <StyledLinkText>See all</StyledLinkText>
            <i className="icon-chevron-right" />
          </Button>
        </StyledHeadWrap>
      </StyledHead>
      <StyledWrap>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
        <StyledItem size={size}>
          <ListItem bgColor={bgColor} />
        </StyledItem>
      </StyledWrap>
    </>
  );
};

export default SingleEventList;
