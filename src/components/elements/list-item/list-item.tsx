import React from 'react';
import { Avatar } from 'components/elements';

import { StyledWrapper, StyledAvatar, StlyedText } from './list-item.styled';

interface ListItemProp {
  bgColor?: 'primary' | 'accent100';
}
const ListItem = ({ bgColor = 'primary' }: ListItemProp) => {
  return (
    <StyledWrapper bgColor={bgColor}>
      <StyledAvatar>
        <Avatar size="md" />
      </StyledAvatar>
      <StlyedText>MohammadReza Shad</StlyedText>
    </StyledWrapper>
  );
};

export default ListItem;
