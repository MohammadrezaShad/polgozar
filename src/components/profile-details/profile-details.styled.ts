import { colors, spacer, fontSize, fontWeight, radius, media } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background: ${colors.primary700};
  background: ${`linear-gradient(270deg, ${colors.primary700} 0%,${colors.primary200} 50%)`};
  border-top-left-radius: 107px;
  border-bottom-left-radius: 107px;
  border-bottom-right-radius: ${radius.lg};
  border-top-right-radius: ${radius.lg};
  border-right: 11px solid ${colors.accent};
  padding: ${spacer.xl} 78px ${spacer.xl} 215px;
  ${media.md`
  border-top-left-radius: ${radius.lg};
  border-bottom-left-radius: ${radius.lg};
  `}
  ${media.lg`
      justify-content:center;
      padding-top:160px;
      padding-right:${spacer.xl}
      padding-left:${spacer.xl};
      padding-bottom:${spacer.xl};
  `}
`;

export const StyledImgWrap = styled.div`
  position: absolute;
  top: -20%;
  left: 0;

  ${media.xl`
    left: 50%;
    transform:translateX(-50%);
    `}
`;

export const StyledBlock = styled.div`
  display: flex;
  align-self: stretch;
  flex-flow: column;
  justify-content: space-between;

  ${media.xl`
    flex: 0 0 100%;
    `}
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  input {
    width: auto;
    color: ${colors.font};
    background-color: transparent;
    border: 0.5px solid ${colors.font};
  }
  &:not(:last-child) {
    margin-bottom: ${spacer.xl};
  }
  i {
    font-size: ${fontSize.xl};
  }
  ${media.lg`
      justify-content:center;
  `}
`;

export const StyledStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background-color: ${colors.font};
  padding: ${spacer.sm} ${spacer.md};
  border-radius: ${radius.alt};
  ${media.lg`
    margin:0 auto;

    `}
`;

export const StyledName = styled.span`
  display: inline-flex;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  color: ${colors.font};

  ${media.lg`
    justify-content:center;

    `}
`;

export const StyledTextWrap = styled.div`
  display: flex;
  flex-flow: column;
  input {
    width: auto;
    color: ${colors.font};
    background-color: transparent;
    border: 0.5px solid ${colors.font};
    :first-child {
      margin-bottom: ${spacer.sm};
    }
    ${media.md`
    flex: 0 0 100%;
    padding-left: ${spacer.xl};
        margin-left:${spacer.lg}

    `}
  }

  ${media.lg`
    margin: ${spacer.xl} 0;
    `}
`;

export const StyledText = styled.span`
  display: inline-flex;
  padding-right: ${spacer.xl};
  padding-left: ${spacer.md};
  white-space: nowrap;
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.normal};
  color: ${colors.font};

  ${media.lg`
    padding-right: 0;
    `}
`;
export const StyledNameBold = styled.span`
  display: inline-flex;
  font-size: ${fontSize.xl};
  white-space: nowrap;
  font-weight: ${fontWeight.bolder};
  color: ${colors.font};

  ${media.lg`
    font-size:${fontSize.md};
    font-weight:${fontWeight.bold};
       justify-content:center;


    `}
`;

export const StyledSubText = styled.span`
  display: inline-flex;
  white-space: nowrap;
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.light};
  color: ${colors.gray1000};

  ${media.md`
    flex: 0 0 100%;
        justify-content:center;

    `}
`;
