import { spacer, colors, fontSize, fontWeight, radius, media } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: ${spacer.xl};
  padding-top: ${spacer.lg};
  margin-left: ${spacer.lg};
  flex: 1;
  align-self: stretch;
  ${media.lg`
    padding-right:${spacer.lg};
  `}
`;

export const StyledProfile = styled.div`
  align-self: flex-start;
  margin-top: ${spacer.xl};
  margin-bottom: ${spacer.xl};
  width: 100%;
  border-top-left-radius: 107px;
  border-bottom-left-radius: 107px;
  border-bottom-right-radius: ${radius.lg};
  border-top-right-radius: ${radius.lg};
  ${media.md`
       margin-top:3rem;
  `}
`;

export const StyledHead = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  flex-wrap: wrap;
  .icon-pen {
    font-size: ${fontSize.xl};
  }
  ${media.md`
    font-size: ${fontSize.md};
  `}
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1;
  margin-top: ${spacer.xl};
  margin-bottom: ${spacer.xl};
  padding-top: ${spacer.xl};
  padding-bottom: ${spacer.xl};
  margin-left: ${spacer.xl};
  padding-left: ${spacer.xl};
  ${media.lg`
     margin-left: 0;
     padding-left: 0;
     justify-content:center;
  `}
`;

export const StyledBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${spacer.xl};
  border-top: 8px solid ${colors.primary200};
  & > button {
    :first-child {
      margin-right: ${spacer.sm};
    }
  }
`;

export const StyledButtonText = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${fontSize.md};
  margin-left: ${spacer.md};
  font-weight: ${fontWeight.normal};

  ${media.md`
    font-size: ${fontSize.sm};
  `}
`;

export const StyledButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
