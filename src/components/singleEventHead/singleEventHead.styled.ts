import { sizes, spacer, colors, fontSize, fontWeight, radius, media } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: ${sizes.xxl};
  margin: 0 auto;
  padding: 0 ${spacer.xl};
  overflow: hidden;
  ${media.xl`
   flex-wrap:wrap;
   justify-content:space-between;
  `}
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
  margin-top: ${spacer.xs};
`;

export const StyledButton = styled.div`
  i {
    color: ${colors.white};
    font-size: ${fontSize.md};
  }
`;

export const StyledBlock = styled.div`
  &:first-child {
    flex-basis: 27%;
    flex-grow: 0;
    margin-right: ${spacer.lg};
    ${media.xl`
        flex:1;
  `}
    ${media.lg`
        flex:0 0 100%;
  `}
  }
  &:nth-child(2) {
    ${media.lg`
      flex:0 0 100%;
      margin-top:16px;
  `}
  }
  &:last-child {
    flex-basis: 35%;
    margin-left: auto;
    padding-left: ${spacer.lg};
    ${media.xl`
        flex: 0 0 100%;
        justify-content:center;
        margin-top:${spacer.lg};
        padding-left: 0;
  `}
    ${media.lg`
        flex:0 0 100%;
  `}
  }
`;

export const StyledHeadCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${colors.primary100};
  border-radius: ${radius.lg};
  width: 100%;
  margin-left: ${spacer.lg};
  ${media.xl`
  width: 50%;
  `}
  ${media.lg`
  width: 100%;
  `}
      ${media.md`
       margin-left: 0;
       flex:0 0 100%;
       margin-top:${spacer.md};
  `}
`;

export const StyledHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacer.xl};
  align-self: normal;
  ${media.md`
     flex-wrap:wrap;
     justify-content:center
  `}
`;

export const StyledHeadWrap = styled.div`
  display: inline-flex;
  flex-flow: column;
  width: 165px;
`;

export const StyledHeadText = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.font};
  color: ${colors.accent};
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.bold};
  border-top-left-radius: ${radius.lg};
  padding: ${spacer.sm};
`;

export const StyledHeadTextBold = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary300};
  color: ${colors.white};
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.bold};
  border-bottom-left-radius: ${radius.lg};
  padding: ${spacer.lg};
  line-height: 1;
  flex: 1;
`;

export const StyledButtonText = styled.span`
  display: inline-flex;
  margin-left: ${spacer.sm};
  color: ${colors.white};
`;

export const StyledHeadDetail = styled.div`
  display: inline-flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: ${spacer.md} ${spacer.lg};
`;

export const StyledHeadDetailText = styled.span`
  display: inline-flex;
`;

export const StyledGuestWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacer.lg};
`;

export const StyledGuestText = styled.div`
  display: inline-flex;
  white-space: nowrap;
`;

export const StyledGuestCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: ${radius.lg};
  height: 30px;
  min-width: 54px;
  margin-left: ${spacer.lg};
  padding: 0 ${spacer.sm};
`;

export const StyledMapWrapper = styled.div`
  display: flex;
  flex-grow: 0;
  width: 310px;
  min-height: 124px;
  border: 1px solid ${colors.primary300};
  border-radius: ${radius.lg};
  overflow: hidden;
  margin: ${spacer.sm} 0 ${spacer.md} 0;
  ${media.lg`
          width: 100%;

  `}
`;

export const StyledVideoWrap = styled.div`
  width: 310px;
  ${media.lg`
          width: 100%;

  `}
`;

export const StyledHeadContent = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledHeadContentWrap = styled.div`
  margin-top: ${spacer.xs};
`;

export const StyledHeadContentText = styled.span`
  display: inline-flex;
  color: ${colors.primary};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.normal};
  margin-right: ${spacer.lg};
`;

export const StyledHeadContentSubText = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.sm};
`;

export const StyledHeadImgWrap = styled.div<{ coverPhotoUrl?: string }>`
  height: 300px;
  width: 100%;
  background: ${({ coverPhotoUrl }) => `url(${coverPhotoUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${radius.mlg};
  overflow: hidden;
`;

export const StyledHeadImg = styled.img`
  object-fit: cover;
`;
