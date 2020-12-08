import { Button } from 'components/elements';
import React from 'react';

import { StyledWrapper, StyledText, StyledLink } from './social-media.styled';

const SocialMedia = () => {
  return (
    <StyledWrapper>
      <StyledText>Share:</StyledText>
      <StyledLink>
        <a>
          <i className="icon-twitter" />
        </a>
        <a>
          <i className="icon-instagram" />
        </a>
        <a>
          <i className="icon-facebook" />
        </a>
      </StyledLink>
      <Button color="font" shape="outline" onClick={() => {}}>
        Dontae
      </Button>
    </StyledWrapper>
  );
};

export default SocialMedia;
