import { spacer, colors } from 'settings/style';
import styled from 'styled-components';

interface StarProps {
  rate: number;
  starId: number;
}

export const StyledItem = styled.div<StarProps>`
  display: flex;
  i {
    color: ${({ rate, starId }) => (rate >= starId ? colors.accent : colors.primary500)};
  }
  &:not(:first-child) {
    margin-left: ${spacer.sm};
  }
`;

export const StyledStar = styled.div``;
