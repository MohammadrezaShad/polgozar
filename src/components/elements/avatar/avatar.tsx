import React, { useCallback } from 'react';
import { Avatar as AvatarAnt } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { StyledImgWrap, StyledImg, StyledImgContainer } from './avatar.styled';

interface AvatarProps {
  avatarUrl?: string;
  size?: 'md' | 'lg';
}

const Avatar = ({ avatarUrl, size = 'lg' }: AvatarProps) => {
  const imgRender = useCallback((): JSX.Element => {
    if (avatarUrl) {
      return <StyledImg size={size} alt="img" src={avatarUrl} />;
    }
    return <AvatarAnt size={size === 'md' ? 60 : 172} icon={<UserOutlined />} />;
  }, [avatarUrl, size]);
  return (
    <StyledImgWrap size={size}>
      <StyledImgContainer size={size}>{imgRender()}</StyledImgContainer>
    </StyledImgWrap>
  );
};

export default Avatar;
