import { spacer, radius, colors, fontType } from 'settings/style';
import styled from 'styled-components';

export const StyledItem = styled.div`
  display: inline-flex !important;
  flex-flow: column;
  height: 100%;
  width: 100%;
  padding-bottom: ${spacer.xl};
  border-radius: ${radius.mlg};
`;

export const StyledWrapper = styled.div``;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  ${fontType.boldTitle};
  margin-bottom: ${spacer.md};
`;
