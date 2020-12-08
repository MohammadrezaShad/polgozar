import { spacer, fontWeight, fontSize, colors, radius, fontType } from 'settings/style';
import styled from 'styled-components';

export const StyledMapWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 186px;
  border: 1px solid ${colors.primary300};
  border-radius: ${radius.lg};
  overflow: hidden;
`;

export const StyledContent = styled.div`
  flex: 0 0 54.7%;
  padding-right: ${spacer.lg};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  ${fontType.boldTitle};
`;

export const StyledText = styled.p`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.md};
`;

export const StyledDetail = styled.div`
  flex: 0 0 38.9%;
`;

export const StyledImgWrap = styled.div`
  margin-bottom: ${spacer.lg};
  border-radius: ${radius.lg};
  overflow: hidden;
`;
export const StyledImg = styled.img`
  object-fit: cover;
`;

export const StyledVideoWrap = styled.div`
  margin-top: ${spacer.lg};
`;
