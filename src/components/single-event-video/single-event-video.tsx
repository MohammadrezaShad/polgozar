import React from 'react';
import { StyledVideoText, StyledVideoWrap } from './single-event-video.styled';

const SingleEventVideo = () => {
  return (
    <StyledVideoWrap>
      <i className="icon-hyperlink" />
      <StyledVideoText>Video Conference </StyledVideoText>
      <i className=" icon-chevron-right" />
    </StyledVideoWrap>
  );
};

export default SingleEventVideo;
