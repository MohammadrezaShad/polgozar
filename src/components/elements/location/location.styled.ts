import { colors, spacer, radius } from 'settings/style';
import styled from 'styled-components';

export const StyledContent = styled.div<{ mapSize?: 'md' | 'lg' }>`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: ${({ mapSize }) => (mapSize === 'md' ? '0 0 70%' : '0 0 50%')};
  background-color: ${colors.white};
  padding: ${spacer.lg};
  border-top-left-radius: ${radius.lg};
  border-bottom-left-radius: ${radius.lg};
  overflow: hidden;
`;

export const StyledMap = styled.div`
  width: 100%;
  border-top-right-radius: ${radius.lg};
  border-bottom-right-radius: ${radius.lg};
  overflow: hidden;
`;

export const StyledAddress = styled.span`
  display: inline-block;
  margin-top: ${spacer.sm};
`;

export const StyledContentTitle = styled.span`
  display: inline-block;
  margin-left: ${spacer.sm};
`;

export const StyledContentWrap = styled.div`
  display: flex;
  align-items: center;
`;
