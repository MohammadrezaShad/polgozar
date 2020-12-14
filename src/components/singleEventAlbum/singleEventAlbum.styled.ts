import { spacer, colors, radius, fontSize, fontWeight, media } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: -${spacer.md};
`;

export const StyledItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 25%;
  border-radius: ${radius.mlg};
  overflow: hidden;
  padding: ${spacer.md};
  cursor: pointer;
  ${media.lg`
      flex:0 0 50%;
  `}
`;

export const StyledImgWrap = styled.div`
  border-radius: ${radius.alt};
  overflow: hidden;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  cursor: pointer;
`;

export const StyledUploadContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 25%;
  padding: ${spacer.md};
  ${media.lg`
      flex:0 0 50%;
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
  border-radius: ${radius.mlg};
  overflow: hidden;
  cursor: pointer;
  i {
    font-size: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
export const StyledButtonText = styled.span``;

export const StyledAlbumWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  background-color: ${colors.white};
  padding: 0 ${spacer.xl};
  padding-bottom: ${spacer.md};
  margin-top: ${spacer.sm};
  border-radius: ${radius.alt};
  ${media.lg`
  
  `}
`;
