import { spacer, colors, radius, fontSize, fontWeight } from 'settings/style';
import styled from 'styled-components';

export const StyledVideoWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.primary300};
  border-radius: ${radius.lg};
  padding: ${spacer.sm} ${spacer.lg};
  i {
    color: ${colors.primary300};
    &:last-child {
      margin-left: auto;
    }
  }
`;

export const StyledVideoText = styled.span`
  display: inline-flex;
  color: ${colors.primary300};
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  margin-left: ${spacer.md};
`;
