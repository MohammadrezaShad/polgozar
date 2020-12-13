import { spacer, colors } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledContent = styled.div`
  padding: ${spacer.xl} 0 ${spacer.xl} 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.gray1500};
  }
`;
