import React, { useCallback } from 'react';
import { Avatar as AvatarAnt } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { StyledImgWrap, StyledImg, StyledImgContainer, StyledWrapper, StyledText } from './avatar.styled';

interface AvatarProps {
  avatarUrl?: string;
  size?: 'md' | 'lg';
  text?: string;
  transparentWrap?: boolean;
}

const Avatar = ({ avatarUrl, size = 'lg', text }: AvatarProps) => {
  const imgRender = useCallback((): JSX.Element => {
    if (avatarUrl) {
      return <StyledImg size={size} alt="img" src={avatarUrl} />;
    }
    return <AvatarAnt size={size === 'md' ? 60 : 172} icon={<UserOutlined />} />;
  }, [avatarUrl, size]);
  return (
    <StyledWrapper>
      <StyledImgWrap size={size}>
        <StyledImgContainer size={size}>{imgRender()}</StyledImgContainer>
      </StyledImgWrap>
      {text ? <StyledText>{text}</StyledText> : null}
    </StyledWrapper>
  );
};

export default Avatar;
