import { spacer, colors, fontType, fontSize, fontWeight } from 'settings/style';
import styled from 'styled-components';

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.normal};
  margin-bottom: ${spacer.md};
`;

export const StyledContent = styled.div``;

export const StyledCount = styled.span`
  display: inline-flex;
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.normal};
  margin-left: ${spacer.sm};
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledItem = styled.div<{ size?: number }>`
  flex: ${({ size }) => (size === 3 ? '0 0 33.33%' : '0 0 50%')};
  padding: ${spacer.md};
`;

export const StyledHeadWrap = styled.div<{ bgColor?: string }>`
  & > span {
    color: ${({ bgColor }) => (bgColor === 'primary' ? colors.primary : colors.accent)};
  }
  & > i {
    color: ${({ bgColor }) => (bgColor === 'primary' ? colors.primary : colors.accent)};
    font-size: ${fontSize.lg};
  }
`;

export const StyledLink = styled.div`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: ${colors.font} !important;
`;

export const StyledLinkText = styled.span`
  display: inline-flex;
  ${fontType.boldTitle};
  margin-right: ${spacer.lg};
`;
