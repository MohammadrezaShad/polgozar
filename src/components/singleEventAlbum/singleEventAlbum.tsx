import React, { useState } from 'react';
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
  StyledAlbumWrap,
} from './singleEventAlbum.styled';

interface Photos {
  id: string;
  url: string;
}
interface SingleEventAlbumProp {
  photos: Photos[];
}
const SingleEventAlbum = ({ photos = [] }: SingleEventAlbumProp) => {
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

      <StyledAlbumWrap>
        <StyledUploadContainer>
          <StyledUploadWrap>
            <input type="file" onChange={onFileChange} />
            <i className="icon-expanded-add-circle" />
          </StyledUploadWrap>
        </StyledUploadContainer>
        {photos.map(({ id, url }) => {
          return (
            <StyledItem key={id} onClick={toggleSlider}>
              <StyledImgWrap>
                <StyledImg src={url} />
              </StyledImgWrap>
            </StyledItem>
          );
        })}
      </StyledAlbumWrap>
      <AlbumSlider photos={photos} toggleSlider={toggleSlider} showSlider={showSlider} />
    </StyledWrapper>
  );
};

export default SingleEventAlbum;
