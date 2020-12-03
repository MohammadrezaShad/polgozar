import React, { useCallback, useState } from 'react';
import { resizeImg, ResizeImageResult } from 'helpers';
import { useDropzone } from 'react-dropzone';
import { message } from 'antd';
import { colors } from 'settings/style';

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
      {!selectedAvatar && <i className="icon-user" style={{ color: colors.accent, fontSize: '30px' }} />}
      <img src={selectedAvatar} alt="" />
    </div>
  );
}
