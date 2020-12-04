import { sizes, spacer } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledTabsWrap = styled.div`
  display: flex;
  flex-flow: column;
  padding-right: ${spacer.xl};
  align-self: stretch;
`;

export const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  max-width: ${sizes.xxl};
  padding: 0 ${spacer.xl};
  margin: 0 auto;
`;
