import React, { useCallback } from 'react';
// import styled from 'styled-components';
// import { colors, spacer, fontType, radius } from 'settings/style';
import { useDropzone } from 'react-dropzone';
import { resizeImg, ResizeImageResult } from 'helpers';
import { message } from 'antd';

interface CoverPhotoProps {
  onChange?: (value: ResizeImageResult) => void;
  value?: ResizeImageResult;
}

function CoverPhoto({ onChange = () => {}, value }: CoverPhotoProps) {
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
    <div
      {...getRootProps()}
      style={{
        borderRadius: '100%',
        width: '90px',
        height: '90px',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        marginBottom: '1rem',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: '#726f6f',
      }}
    >
      <input {...getInputProps()} />
      {value ? <img src={value.url} alt="" /> : 'select image'}
    </div>
  );
}

export default CoverPhoto;

// const OptionItem = styled.div``;
