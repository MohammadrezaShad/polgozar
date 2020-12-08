import React from 'react';
import { StyledWrapper, StyledBlock, StyledText, StyledSubText, StyledDay } from './date-tag.styled';

const DateTag = () => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <StyledText>Mar</StyledText>
        <StyledDay>22</StyledDay>
      </StyledBlock>
      <StyledBlock>
        <StyledSubText>Set on Calendar</StyledSubText>
      </StyledBlock>
    </StyledWrapper>
  );
};

DateTag.propTypes = {};

export default DateTag;
