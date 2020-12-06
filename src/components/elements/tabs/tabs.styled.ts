import styled from 'styled-components';
import { colors, fontWeight, fontSize, spacer } from 'settings/style';

interface TabProp {
  path: string;
  selectedTab: string;
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
  color: ${({ selectedTab, path }) => (selectedTab === path ? colors.white : colors.primary400)};
  cursor: pointer;
  text-align: center;
  background-color: ${({ selectedTab, path }) => (selectedTab === path ? colors.primary300 : colors.primary200)};
  &:not(:last-child) {
    border-bottom: ${({ selectedTab, path }) => (selectedTab === path ? 'none' : `1px solid ${colors.primary400}`)};
  }
`;
