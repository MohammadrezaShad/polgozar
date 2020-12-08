import { spacer, sizes, colors } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  flex: 1;
`;

export const StyledHead = styled.div`
  background: ${colors.primary200};
  background: ${`linear-gradient(
    270deg,
    ${colors.primary200} 0%,
    ${colors.white} 16%,
    ${colors.white300} 74%,
    ${colors.white400} 100%
  )`};
  padding: ${spacer.lg};
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${sizes.xxl};
  margin: ${spacer.xl} auto;
  padding: 0 ${spacer.xl};
`;

export const StyledList = styled.div`
  max-width: ${sizes.xxl};
  margin: ${spacer.xl} auto;
  padding: 0 ${spacer.xl};
  border-top: 1px solid ${colors.gray1500};
  padding-top: ${spacer.xl};
`;

export const StyledComments = styled.div`
  max-width: ${sizes.xxl};
  padding: 0 ${spacer.xl};
  margin: 0 auto;
  border-top: 1px solid ${colors.gray1500};
  padding-top: ${spacer.xl};
`;

export const StyledAlbum = styled.div`
  display: flex;
  max-width: ${sizes.xxl};
  padding: 0 ${spacer.xl};
  margin: 0 auto;
  overflow: hidden;
  border-top: 1px solid ${colors.gray1500};
  margin-top: ${spacer.xl};
`;

export const StyledEvents = styled.div`
  max-width: ${sizes.xxl};
  margin: ${spacer.xl} auto 0 auto;
  padding: 0 ${spacer.xl};
`;
