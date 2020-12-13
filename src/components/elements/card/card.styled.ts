import { radius, spacer, colors, fontType, fontSize, fontWeight } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: inline-flex;
  flex-flow: column;
  border-radius: ${radius.mlg};
  flex: 1;
  background-color: ${colors.white};
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.7);
`;

export const StyledImgWrap = styled.div<{ url?: string }>`
  display: flex;
  align-items: flex-end;
  background: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 270px;
  border-top-right-radius: ${radius.mlg};
  border-top-left-radius: ${radius.mlg};
`;

export const StyledImg = styled.img`
  object-fit: cover;
  border-top-right-radius: ${radius.mlg};
  border-top-left-radius: ${radius.mlg};
`;

export const StyledContent = styled.div`
  margin: ${spacer.md} ${spacer.lg} ${spacer.lg} ${spacer.lg};
  background-color: ${colors.white};
`;

export const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: ${spacer.lg};
  margin-top: 0;
  background-color: ${colors.white};
  border-bottom-right-radius: ${radius.mlg};
  border-bottom-left-radius: ${radius.mlg};
  margin-top: auto;
`;

export const StyledText = styled.span`
  display: inline-flex;
  max-width: 256px;
`;

export const StyledBottomContent = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: ${spacer.sm};
`;

export const StyledBottomWrap = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: ${fontSize.lg};
    color: ${colors.primary};
    margin-right: ${spacer.sm};
  }
`;
export const StyledBottomText = styled.span`
  display: inline-flex;
  color: ${colors.primary};
  font-size: ${fontSize.lg};
`;
export const StyledBottomCount = styled.span`
  display: inline-flex;
  color: ${colors.primary};
  font-size: ${fontSize.lg};
  margin-left: ${spacer.md};
`;

export const StyledImgContent = styled.div`
  background: ${colors.black};
  background: ${`linear-gradient(to bottom, transparent 0%, ${colors.black} 100%)`};
  padding: 0 ${spacer.xl};
  padding-bottom: ${spacer.md};
  width: 100%;
`;
export const StyledImgDateWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacer.sm};
  i {
    color: ${colors.white};
    font-size: ${fontSize.xl};
  }
`;
export const StyledImgTitle = styled.span`
  display: inline-flex;
  ${fontType.boldTitle};
  color: ${colors.white};
`;
export const StyledImgDate = styled.div`
  display: inline-flex;
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.normal};
  margin-left: ${spacer.md};
  color: ${colors.white};
`;
