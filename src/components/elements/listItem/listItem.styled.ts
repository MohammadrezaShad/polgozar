import { spacer, fontSize, fontWeight, colors, radius } from 'settings/style';
import styled from 'styled-components';

interface ListItemProp {
  bgColor?: 'primary' | 'accent100';
}
export const StyledWrapper = styled.div<ListItemProp>`
  padding: ${spacer.lg};
  position: relative;
  background-color: ${({ bgColor }) => (bgColor === 'primary' ? colors.primary : colors.accent100)};
  border-radius: ${radius.xl};
`;

export const StyledAvatar = styled.div`
  position: absolute;
  left: 0;
  top: -30%;
`;

export const StlyedText = styled.span`
  display: inline-flex;
  margin-left: 100px;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.light};
`;
