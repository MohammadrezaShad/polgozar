import React, { useCallback, useState } from 'react';
import { ResizeImageResult } from 'helpers';
import { colors } from 'settings/style';
import { ImageInput } from 'components/elements';

interface ProfileAvatarProps {
  loading: boolean;
  onImportAvatar: (data: ResizeImageResult) => void;
}

export default function ProfileAvatar({ onImportAvatar }: ProfileAvatarProps) {
  const [selectedAvatar, setAvatar] = useState('');

  const onSubmit = useCallback(
    (data) => {
      onImportAvatar(data);
      setAvatar(data.url);
    },
    [onImportAvatar],
  );

  return (
    <ImageInput width={200} height={200} cropping onChange={onSubmit}>
      <div
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
        {!selectedAvatar && <i className="icon-user" style={{ color: colors.accent, fontSize: '30px' }} />}
        <img src={selectedAvatar} alt="" />
      </div>
    </ImageInput>
  );
}
