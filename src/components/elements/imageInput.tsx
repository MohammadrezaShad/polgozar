import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { resizeImg, ResizeImageResult } from 'helpers';
import { message } from 'antd';

interface ImportInputProps {
  onChange: (value: ResizeImageResult) => void;
  children?: React.ReactElement;
  width?: number;
  height?: number;
  cropping?: boolean;
  validating?: boolean;
}

function ImportInput({
  onChange = () => {},
  width = 200,
  height = 200,
  cropping = true,
  validating = false,
  children,
  ...rest
}: ImportInputProps) {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        await resizeImg(acceptedFiles[0], width, height, cropping, validating).then((data) => {
          onChange(data);
        });
      } catch (err) {
        message.error(err.message);
      }
    },
    [cropping, height, onChange, validating, width],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <ImportInputWrapper {...getRootProps()} {...rest}>
      <input {...getInputProps()} />
      {children}
    </ImportInputWrapper>
  );
}

export default ImportInput;

const ImportInputWrapper = styled.div`
  outline: none;
`;
