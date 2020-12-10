import React from 'react';

import { Button } from 'components/elements';
import {
  StyledWrapper,
  StyledImgWrap,
  StyledContent,
  StyledBottom,
  StyledText,
  StyledBottomWrap,
  StyledBottomText,
  StyledBottomCount,
  StyledBottomContent,
  StyledImgContent,
  StyledImgDateWrap,
  StyledImgTitle,
  StyledImgDate,
} from './card.styled';

interface CardProp {
  url: string;
}

const Card = ({ url }: CardProp) => {
  return (
    <StyledWrapper>
      <StyledImgWrap url={url}>
        <StyledImgContent>
          <StyledImgDateWrap>
            <i className="icon-calendar2" />
            <StyledImgDate>22 MAR 2020</StyledImgDate>
          </StyledImgDateWrap>
          <StyledImgTitle>Bicycle match</StyledImgTitle>
        </StyledImgContent>
      </StyledImgWrap>
      <StyledContent>
        <StyledText>sss</StyledText>
      </StyledContent>
      <StyledBottom>
        <StyledBottomContent>
          <StyledBottomWrap>
            <i className="icon-pin" />
            <StyledBottomText>Abali</StyledBottomText>
          </StyledBottomWrap>
          <StyledBottomWrap>
            <StyledBottomText>Attended</StyledBottomText>
            <StyledBottomCount>09</StyledBottomCount>
          </StyledBottomWrap>
        </StyledBottomContent>
        <Button color="accent" size="lg" shape="outline" onClick={() => {}}>
          Attend
        </Button>
      </StyledBottom>
    </StyledWrapper>
  );
};
export default Card;
