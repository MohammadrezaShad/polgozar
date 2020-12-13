import React from 'react';

import StarRating from 'components/elements/star-rating/star-rating';
import { Button } from 'components/elements';
import {
  StyledWrapper,
  StyledContentTopWrap,
  StyledContentTopContainer,
  StyledContentTopSubText,
  StyledStar,
  StyledContentTopText,
} from './singleGroupBottom.styled';

interface SingleGroupBottomProp {
  slug?: string;
  name?: string;
}
const SingleGroupBottom = ({ slug, name }: SingleGroupBottomProp) => {
  return (
    <StyledWrapper>
      <StyledContentTopWrap>
        <StyledContentTopContainer>
          <StyledContentTopText>{slug}</StyledContentTopText>
          <StyledStar>
            <StarRating rate={3} />
          </StyledStar>
        </StyledContentTopContainer>
        <StyledContentTopSubText>{name}</StyledContentTopSubText>
      </StyledContentTopWrap>
      <Button size="lg" onClick={() => {}} color="danger">
        Join to this group
      </Button>
    </StyledWrapper>
  );
};

export default SingleGroupBottom;
