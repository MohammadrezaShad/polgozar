import { spacer, colors, radius, fontSize, fontWeight, media } from 'settings/style';
import styled from 'styled-components';

const boxSize = '35vh';
const boxSizeMd = '25vh';
const boxSizexs = '10vh';

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledItem = styled.div`
  height: ${boxSize};
  flex-grow: 1;
  border-radius: ${radius.md};
  overflow: hidden;
  margin: ${spacer.sm};
  cursor: pointer;
  ${media.md`
    height:${boxSizeMd};
  `}
  ${media.xs`
    height: ${boxSizexs}
  `}
`;

export const StyledImg = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;

export const StyledUploadContainer = styled.div`
  height: ${boxSize};
  width: ${boxSize};
  display: inline-flex;
  margin: 0.5rem;
  ${media.md`
    height:${boxSizeMd};
    width: ${boxSizeMd};
  `}
  ${media.xs`
    height: ${boxSizexs}
    width: ${boxSizexs};
  `}
`;

export const StyledUploadWrap = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white200};
  flex: 1;
  height: 100%;
  border: 1px dashed ${colors.font};
  position: relative;
  border-radius: ${radius.md};
  overflow: hidden;
  cursor: pointer;
  i {
    font-size: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${media.xs`
     font-size:${fontSize.sm};
  `}
  }
  input {
    position: absolute;
    width: 1px;
    opacity: 0;
    visibility: hidden;
    background-color: transparent;
  }
`;

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 100%;
  padding-right: ${spacer.xl};
  margin-right: ${spacer.xl};
  margin-left: ${spacer.lg};
  padding-top: ${spacer.xl};
  margin-top: ${spacer.lg};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.normal};
  margin-right: ${spacer.md};
`;

export const StyledButton = styled.span``;

export const StyledButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  ${media.lg`
    min-width: auto;
  `}
`;
export const StyledButtonText = styled.span`
  ${media.xs`
    font-size:${fontSize.sm};
  `}
`;

export const StyledAlbumWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  background-color: ${colors.white};
  padding: ${spacer.md};
  padding-bottom: ${spacer.md};
  margin-top: ${spacer.sm};
  border-radius: ${radius.lg};
`;
