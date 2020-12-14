import React, { useState } from 'react';
import { Button, AlbumSlider, ImageInput } from 'components/elements';
import { ResizeImageResult } from 'helpers';
import {
  StyledWrapper,
  StyledItem,
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
  onImport: (data: ResizeImageResult) => void;
}
const SingleEventAlbum = ({ photos = [], onImport }: SingleEventAlbumProp) => {
  const [showSlider, setShowSlider] = useState(false);
  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

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
            <ImageInput width={900} height={900} cropping={false} onChange={onImport}>
              <i className="icon-expanded-add-circle" />
            </ImageInput>
          </StyledUploadWrap>
        </StyledUploadContainer>
        {photos.map(({ id, url }) => {
          return (
            <StyledItem key={id} onClick={toggleSlider}>
              <StyledImg src={url} />
            </StyledItem>
          );
        })}
      </StyledAlbumWrap>
      <AlbumSlider photos={photos} toggleSlider={toggleSlider} showSlider={showSlider} />
    </StyledWrapper>
  );
};

export default SingleEventAlbum;
