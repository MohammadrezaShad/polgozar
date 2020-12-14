import { sizes, spacer, media, colors } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledTabsWrap = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: ${spacer.xl};
  background-color: ${colors.primary200};
  align-self: stretch;
  ${media.lg`
    position:sticky;
    top:0;
    margin-right: 0;
    z-index:100;
  `}
`;

export const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  max-width: ${sizes.xxl};
  padding-right: ${spacer.xl};
  margin: 0 auto;
  ${media.lg`
    flex-flow:column;
        padding-right: 0;

  `}
`;
