import { colors, spacer, fontSize, fontWeight } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.primary300};
  border-bottom: 1px solid ${colors.primary300};
`;

export const StyledText = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  margin-right: ${spacer.lg};
`;

export const StyledLink = styled.div`
  display: flex;
  margin: ${spacer.xl} 0;
  margin-right: auto;
  i {
    font-size: ${fontSize.xxl};
    color: ${colors.font};
  }
  a {
    &:not(:first-child) {
      margin-left: ${spacer.lg};
    }
  }
`;

export const StyledButtonText = styled.span`
  display: inline-flex;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.md};
`;
