import { radius, colors, spacer, fontSize, fontType, fontWeight, media } from 'settings/style';
import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 54.7%;
  min-width: 0;

  ${media.xl`
      flex: 0 0 100%;

  `}
`;

export const StyledFormHead = styled.div`
  padding-bottom: ${spacer.xl};
  margin-bottom: ${spacer.xl};
  border-bottom: 1px solid ${colors.font};
`;

export const StyledHeadFormContent = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: 34px;
  }
`;

export const StyledHeadFormTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.bold};
  margin-left: ${spacer.lg};
`;

export const StyledFormWrap = styled.div`
  flex-basis: 32%;
  padding: ${spacer.md};
  flex-shrink: 0;
  background-color: ${colors.primary700};
  border-radius: ${radius.lg};
  border-right: 11px solid ${colors.font};
  min-width: 0;
  margin-left: ${spacer.sm};

  ${media.xl`
      flex: 0 0 90%;

  `}
`;

export const StyledText = styled.p`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.light};
  margin-bottom: ${spacer.sm};
  min-height: 440px !important;

  ${media.xl`
    min-height: auto !important;
  `}
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.bold};
  margin-bottom: ${spacer.sm};
`;

export const StyledButton = styled.div`
  display: flex;
  padding-top: ${spacer.md};
  & > button {
    flex: 1;
  }
`;

export const StyledButtonText = styled.span`
  display: inline-flex;
  color: ${colors.white};
  ${fontType.md};
`;
