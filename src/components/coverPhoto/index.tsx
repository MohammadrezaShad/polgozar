import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { colors, spacer, rgba, radius, fontWeight } from 'settings/style';
import { useDropzone } from 'react-dropzone';
import { resizeImg, ResizeImageResult } from 'helpers';
import { message } from 'antd';
import { Button } from 'components/elements';
import AddCircle from 'assets/images/add-circle.svg';

interface CoverPhotoProps {
  onChange?: (value: ResizeImageResult) => void;
  value?: ResizeImageResult;
}

function CoverPhoto({ onChange = () => {}, value, ...rest }: CoverPhotoProps) {
  console.log(rest, value, 'NNNNNNN');
  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        await resizeImg(acceptedFiles[0], 200, 200, true).then((data) => {
          onChange(data);
        });
      } catch (err) {
        message.error(err.message);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <CoverPhotoWrapper {...getRootProps()} imageUrl={value?.url}>
      <input {...getInputProps()} />
      {!value?.url && (
        <CoverPhotoEmptyContent>
          <img src={AddCircle} alt="" />
          <Button onClick={() => {}} color="primary" shape="outline">
            Add cover
          </Button>
        </CoverPhotoEmptyContent>
      )}
    </CoverPhotoWrapper>
  );
}

export default CoverPhoto;

const CoverPhotoWrapper = styled.div<{ imageUrl?: string }>`
  width: 60%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: ${radius.lg};
  cursor: pointer;
  ${({ imageUrl }) =>
    imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          &:hover:before {
            content: 'Change Photo';
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${rgba(colors.black, 0.5)};
            color: ${colors.white};
            font-weight: ${fontWeight.bold};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: ${radius.lg};
          }
        `
      : css`
          border: 3px dashed ${colors.primary};
        `}

  &:after {
    content: '';
    display: block;
    padding-bottom: 66.6666%;
  }
`;

const CoverPhotoEmptyContent = styled.div`
  text-align: center;
  img {
    width: 150px;
    margin-bottom: ${spacer.lg};
  }
`;
