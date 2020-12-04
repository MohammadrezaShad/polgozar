import { colors, spacer, fontSize, fontWeight, radius } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  background: ${colors.primary700};
  background: ${`linear-gradient(270deg, ${colors.primary700} 0%, #BCD2DB 50%)`};
  border-top-left-radius: 107px;
  border-bottom-left-radius: 107px;
  border-bottom-right-radius: ${radius.lg};
  border-top-right-radius: ${radius.lg};
  border-right: 11px solid ${colors.accent};
  padding: ${spacer.xl} 78px ${spacer.xl} 215px;
`;

export const StyledImgWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -20%;
  left: 0;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background-color: ${colors.white};
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 182px;
  width: 182px;
  background: ${colors.primary300};
  background: ${`linear-gradient(137deg, ${colors.primary300} 29%, ${colors.accent} 100%)`};
`;

export const StyledImg = styled.img<{ avatarUrl?: string }>`
  display: ${({ avatarUrl }) => (avatarUrl ? 'block' : 'none')};
  border-radius: 50%;
  height: 172px;
  width: 172px;
  background-color: ${colors.white};
  object-fit: fill;
`;

export const StyledBlock = styled.div`
  display: flex;
  align-self: stretch;
  flex-flow: column;
  justify-content: space-between;
`;

export const StyledInfo = styled.div`
  &:not(:last-child) {
    margin-bottom: ${spacer.xl};
  }
  i {
    font-size: ${fontSize.xl};
  }
`;

export const StyledStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background-color: ${colors.font};
  padding: ${spacer.sm} ${spacer.md};
  border-radius: ${radius.lg};
`;

export const StyledName = styled.span`
  display: inline-flex;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  color: ${colors.font};
`;

export const StyledTextWrap = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledText = styled.span`
  display: inline-flex;
  margin-right: ${spacer.xl};
  margin-left: ${spacer.md};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.normal};
  color: ${colors.font};
`;
export const StyledNameBold = styled.span`
  display: inline-flex;
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.bolder};
  color: ${colors.font};
`;

export const StyledSubText = styled.span`
  display: inline-flex;
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.light};
  color: #435760;
`;
