import { radius, spacer, colors, fontSize, fontWeight, fontType } from 'settings/style';
import styled from 'styled-components';
import { sizes } from '../../settings/style';

export const StyledWrapper = styled.div`
  padding: ${spacer.xl} 0;
  border-bottom: 1px solid ${colors.gray1500};
`;

export const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${sizes.md}) {
    flex-wrap: wrap;
  }
`;

export const StyledHead = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 40%;
  @media only screen and (max-width: ${sizes.md}) {
    flex: 1;
  }
`;

export const StyledHeadTop = styled.div``;

export const StyledHeadContent = styled.div`
  margin-top: auto;
  margin-bottom: ${spacer.lg};
`;

export const StyledHeadBottom = styled.div``;

export const StyledTitle = styled.span`
  display: inline-flex;
  ${fontType.boldTitle};
`;

export const StyledDescriptionText = styled.p`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.lg};
`;

export const StyledDescriptionButton = styled.span`
  display: inline-flex;
  margin-left: -${spacer.lg};
`;

export const StyledDescriptionWrap = styled.div`
  flex: 0 0 50%;
  @media only screen and (max-width: ${sizes.md}) {
    flex: 0 0 100%;
  }
`;

export const StyledDescriptionButtonWrap = styled.div`
  align-self: flex-end;
`;

export const StyledImg = styled.div<{ coverPhotoUrl?: string }>`
  height: 300px;
  width: 400px;
  background: ${({ coverPhotoUrl }) => `url(${coverPhotoUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${radius.mlg};
  overflow: hidden;
  margin-right: ${spacer.lg};
  @media only screen and (max-width: ${sizes.md}) {
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-bottom: ${spacer.xl};
  @media only screen and (max-width: ${sizes.md}) {
    flex-wrap: wrap;
  }
`;
export const StyledHeadTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: ${sizes.md}) {
    margin-top: ${spacer.md};
    width: 100%;
  }
`;
export const StyledHeadTopWrap = styled.div``;
export const StyledHeadTopText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.bold};
  margin-right: ${spacer.lg};
  @media only screen and (max-width: ${sizes.md}) {
    margin-right: ${spacer.xs};
  }
`;

export const StyledHeadTopSubText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.light};
`;

export const StyledStar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${spacer.xs};
  background-color: ${colors.font};
  padding: ${spacer.sm} ${spacer.md};
  border-radius: ${radius.alt};
`;

export const StyledHeadContentText = styled.span`
  display: flex;
  font-size: ${fontSize.base};
  color: ${colors.primary};
  margin-bottom: ${spacer.lg};
`;
export const StyledHeadContentListWrap = styled.div`
  display: flex;
`;
export const StyledHeadContentListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray1700};
  border-radius: ${radius.alt2};
  padding: ${spacer.xs};

  &:not(:first-child) {
    margin-left: -${spacer.md};
  }
`;
export const StyledHeadContentList = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: ${radius.alt2};
  padding: ${spacer.xs};
`;
export const StyledHeadContentListText = styled.span`
  display: inline-flex;
  margin: 0 ${spacer.xl} 0 ${spacer.xs};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.light};
`;

export const StyledAvatar = styled.div<{ avatarUrl?: string }>`
  background: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 42px;
  height: 42px;
  background-color: ${colors.white};
  border-radius: 50%;
`;

export const StyledHeadBottomWrap = styled.div`
  display: flex;
  align-items: center;
  i {
    color: ${colors.primary};
    font-size: ${fontSize.base};
  }
`;
export const StyledHeadBottomTag = styled.span`
  display: inline-flex;
  font-size: ${fontSize.base};
  color: ${colors.primary};
  padding: 0 ${spacer.lg} 0 ${spacer.sm};
`;
export const StyledHeadBottomText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.lg};
`;
