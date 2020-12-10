import { fontSize, fontWeight, radius, fontType, colors, spacer } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  border: 1px solid ${colors.gray1200};
  border-radius: ${radius.mlg};
  flex: 0 0 105px;
  height: 100px;
  overflow: hidden;
`;

export const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacer.xs};

  &:first-child {
    flex-flow: column;
    background-color: ${colors.white100};
    flex: 1;
  }
  &:last-child {
    background-color: ${colors.gray1200};
  }
`;

export const StyledText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.light};
  color: ${colors.gray1300};
`;

export const StyledSubText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.light};
  color: ${colors.gray1400};
  text-align: center;
`;

export const StyledDay = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${fontType.xl};
  color: ${colors.red300};
  line-height: 1;
`;
