import styled from 'styled-components';
import { colors, fontWeight, fontSize, spacer } from 'settings/style';

interface TabProp {
  itemId: number;
  selectedTab: number;
  height?: string;
  width?: string;
  matchParent?: boolean;
}

export const StyledWrapper = styled.div``;

export const StyledTab = styled.div<TabProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex: ${({ matchParent }) => (matchParent ? 1 : 'none')};
  overflow-wrap: anywhere;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  padding: ${spacer.sm};
  color: ${({ selectedTab, itemId }) => (selectedTab === itemId ? colors.white : colors.primary400)};
  cursor: pointer;
  text-align: center;
  background-color: ${({ selectedTab, itemId }) => (selectedTab === itemId ? colors.primary300 : colors.primary200)};
  &:not(:last-child) {
    border-bottom: ${({ selectedTab, itemId }) => (selectedTab === itemId ? 'none' : `1px solid ${colors.primary400}`)};
  }
`;
