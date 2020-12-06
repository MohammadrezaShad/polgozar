import React from 'react';

import { StyledItem } from './star-rating.styled';

interface StarRatingProps {
  rate: number;
}

const StarRating = ({ rate }: StarRatingProps) => {
  return (
    <>
      <StyledItem rate={rate} starId={1}>
        <i className="icon-rating-star" />
      </StyledItem>
      <StyledItem rate={rate} starId={2}>
        <i className="icon-rating-star" />
      </StyledItem>
      <StyledItem rate={rate} starId={3}>
        <i className="icon-rating-star" />
      </StyledItem>
      <StyledItem rate={rate} starId={4}>
        <i className="icon-rating-star" />
      </StyledItem>
      <StyledItem rate={rate} starId={5}>
        <i className="icon-rating-star" />
      </StyledItem>
    </>
  );
};

export default StarRating;
