import React, { useState } from 'react';
import Bg from 'assets/images/bg.jpg';
import { Button, AlbumSlider } from 'components/elements';
import {
  StyledWrapper,
  StyledItem,
  StyledImgWrap,
  StyledImg,
  StyledUploadWrap,
  StyledUploadContainer,
  StyledTitle,
  StyledButton,
  StyledButtonWrap,
  StyledHead,
  StyledButtonText,
} from './single-event-album.styled';

const SingleEventAlbum = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSlider, setShowSlider] = useState(false);
  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files[0]);
  };
  console.log(selectedFile);
  return (
    <StyledWrapper>
      <StyledHead>
        <StyledTitle>Pictures</StyledTitle>
        <StyledButton>
          <Button shape="outline" color="primary" size="lg" onClick={() => {}}>
            <StyledButtonWrap>
              <i className="icon-plus" />
              <StyledButtonText>Generate upload link</StyledButtonText>
            </StyledButtonWrap>
          </Button>
        </StyledButton>
      </StyledHead>
      <StyledUploadContainer>
        <StyledUploadWrap>
          <input type="file" onChange={onFileChange} />
          <i className="icon-expanded-add-circle" />
        </StyledUploadWrap>
      </StyledUploadContainer>
      <StyledItem onClick={toggleSlider}>
        <StyledImgWrap>
          <StyledImg src={Bg} />
        </StyledImgWrap>
      </StyledItem>
      <StyledItem onClick={toggleSlider}>
        <StyledImgWrap>
          <StyledImg src={Bg} />
        </StyledImgWrap>
      </StyledItem>
      <StyledItem onClick={toggleSlider}>
        <StyledImgWrap>
          <StyledImg src={Bg} />
        </StyledImgWrap>
      </StyledItem>
      <StyledItem onClick={toggleSlider}>
        <StyledImgWrap>
          <StyledImg src={Bg} />
        </StyledImgWrap>
      </StyledItem>
      <AlbumSlider toggleSlider={toggleSlider} showSlider={showSlider} />
    </StyledWrapper>
  );
};

export default SingleEventAlbum;
