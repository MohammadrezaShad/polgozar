import { fontSize, fontWeight, spacer, colors, radius } from 'settings/style';
import styled from 'styled-components';
import { sizes } from '../../settings/style';

export const StyledWrapper = styled.div`
  padding-left: ${spacer.xl};
  padding-top: ${spacer.lg};
  padding-bottom: ${spacer.lg};
  margin-left: -${spacer.xl};
  background: ${colors.gray1700};
  background: ${`linear-gradient(90deg,${colors.primary200}  0%, ${colors.gray1700} 100%)`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-bottom: ${spacer.xl};
`;
export const StyledContentTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
export const StyledContentTopWrap = styled.div`
  flex: 0 0 40%;

  @media only screen and (max-width: ${sizes.md}) {
    flex: 0 0 100%;
  }
`;
export const StyledContentTopText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.bold};
  margin-right: ${spacer.lg};
`;

export const StyledContentTopSubText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.light};
`;

export const StyledStar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.font};
  padding: ${spacer.sm} ${spacer.md};
  margin-top: ${spacer.xs};
  border-radius: ${radius.alt};
`;
