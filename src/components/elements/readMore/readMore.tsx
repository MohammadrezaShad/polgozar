import React from 'react';
import StyledText from './readMore.styled';

interface ReadMoreProp {
  onClick?: () => void;
  elementMaxHeight: number;
  elementHeight: number;
  textExpand: boolean;
}

const ReadMore = ({ onClick, elementMaxHeight, elementHeight, textExpand }: ReadMoreProp) => {
  console.log(elementHeight);
  const clickHandler = () => onClick && onClick();
  return (
    <>
      {elementMaxHeight < elementHeight ? (
        <StyledText onClick={clickHandler}>{!textExpand ? 'ReadMore' : 'ReadLess'}</StyledText>
      ) : null}
    </>
  );
};

export default ReadMore;
