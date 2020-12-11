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
  Bottom?: string;
}
const SingleGroupBottom = ({ Bottom }: SingleGroupBottomProp) => {
  return (
    <StyledWrapper>
      <StyledContentTopWrap>
        <StyledContentTopContainer>
          <StyledContentTopText>Bachehaye khoshhal Iran</StyledContentTopText>
          <StyledStar>
            <StarRating rate={3} />
          </StyledStar>
        </StyledContentTopContainer>
        <StyledContentTopSubText>Ravanshad</StyledContentTopSubText>
      </StyledContentTopWrap>
      <Button size="lg" onClick={() => {}} color="danger">
        Join to this group
      </Button>
    </StyledWrapper>
  );
};

export default SingleGroupBottom;
