import React from 'react';
import { v4 } from 'uuid';
import { StyledItem } from './star-rating.styled';

interface StarRatingProps {
  rate: number;
}

const StarRating = ({ rate }: StarRatingProps) => {
  return (
    <>
      {[...Array(5)].map((_, idx) => (
        <StyledItem rate={rate} starId={idx + 1} key={v4()}>
          <i className="icon-rating-star" />
        </StyledItem>
      ))}
    </>
  );
};

export default StarRating;
