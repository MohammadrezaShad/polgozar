import React, { useCallback, useState } from 'react';
import { resizeImg, ResizeImageResult } from 'helpers';
import { useDropzone } from 'react-dropzone';
import { message } from 'antd';

interface ProfileAvatarProps {
  loading: boolean;
  onImportAvatar: (data: ResizeImageResult) => void;
}

export default function ProfileAvatar({ loading = false, onImportAvatar }: ProfileAvatarProps) {
  const [selectedAvatar, setAvatar] = useState('');

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        await resizeImg(acceptedFiles[0], 200, 200, true).then((data) => {
          if (!loading) {
            onImportAvatar(data);
            setAvatar(data.url);
          }
        });
      } catch (err) {
        message.error(err.message);
      }
    },
    [onImportAvatar, loading],
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {!selectedAvatar && 'Upload Image'}
      <img src={selectedAvatar} alt="" />
    </div>
  );
}
