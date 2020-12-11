import styled from 'styled-components';
import { sizes, spacer, colors } from '../../settings/style';

export const StyledWrapper = styled.div`
  background-color: ${colors.gray1700};
`;

export const StyledTabs = styled.div`
  background-color: ${colors.primary200};
`;

export const StyledContent = styled.div`
  overflow: hidden;
  padding-left: ${spacer.xl};
`;

export const StyledWrap = styled.div`
  display: flex;
`;

export const StyledLayout = styled.div`
  justify-content: center;
  max-width: ${sizes.xxl};
  margin: 0 auto;
  padding: 0 ${spacer.xl};
`;
