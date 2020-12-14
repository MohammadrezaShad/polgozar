import { colors, fontType, spacer, fontSize, media } from 'settings/style';
import styled from 'styled-components';

interface AvatarProps {
  size?: 'md' | 'lg';
}
export const StyledImgWrap = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: ${({ size }) => (size === 'md' ? '70px' : '200px')};
  width: ${({ size }) => (size === 'md' ? '70px' : '200px')};
  background-color: ${colors.white};
`;

export const StyledImgContainer = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: ${({ size }) => (size === 'md' ? '62px' : '182px')};
  width: ${({ size }) => (size === 'md' ? '62px' : '182px')};
  background: ${colors.primary300};
  background: ${`linear-gradient(137deg, ${colors.primary300} 29%, ${colors.accent} 100%)`};
`;

export const StyledImg = styled.img<AvatarProps>`
  display: block;
  border-radius: 50%;
  height: ${({ size }) => (size === 'md' ? '60px' : '172px')};
  width: ${({ size }) => (size === 'md' ? '60px' : '172px')};
  background-color: ${colors.white};
  object-fit: cover;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  ${media.xs`
      flex-flow:column;
      align-items: flex-start;
    `}
`;

export const StyledText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.md};
  margin-left: ${spacer.xl};
  ${media.xs`
        font-size: ${fontSize.sm};

    `}
`;
