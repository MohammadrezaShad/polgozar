import styled from 'styled-components';
import { sizes, spacer, colors, media } from '../../settings/style';

export const StyledWrapper = styled.div`
  background-color: ${colors.gray1700};
`;

export const StyledTabs = styled.div`
  background-color: ${colors.primary200};
  z-index: 100;
  ${media.lg`
    position:sticky;
    top:0;
  `}
`;

export const StyledContent = styled.div`
  overflow: hidden;
  padding-left: ${spacer.xl};
  ${media.lg`
      padding-right: 1.5rem;

  `}
`;

export const StyledWrap = styled.div`
  display: flex;
  ${media.lg`
    flex-flow:column;
    margin:0 -1.5rem;

  `}
`;

export const StyledLayout = styled.div`
  justify-content: center;
  max-width: ${sizes.xxl};
  margin: 0 auto;
  padding: 0 ${spacer.xl};
`;
