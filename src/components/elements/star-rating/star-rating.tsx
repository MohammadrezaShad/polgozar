import React from 'react';

import { StyledItem } from './star-rating.styled';

interface StarRatingProps {
  items: { id: number }[];
  rate: number;
}

const StarRating = ({ items = [], rate }: StarRatingProps) => {
  return (
    <>
      {items.map(({ id }) => {
        return (
          <StyledItem key={id} rate={rate} starId={id}>
            <i className="icon-rating-star" />
          </StyledItem>
        );
      })}
    </>
  );
};

export default StarRating;
