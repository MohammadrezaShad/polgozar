import styled from 'styled-components';
import { colors, fontWeight, fontSize, spacer, media } from 'settings/style';

interface TabProp {
  href: string;
  selectedTab: string;
  height?: string;
  width?: string;
  matchParent?: boolean;
}

export const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: column;
  ${media.lg`
    flex-flow:row;
  `}
`;

export const StyledTab = styled.div<TabProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  width: ${({ width }) => width};
  flex: ${({ matchParent }) => (matchParent ? 1 : 'none')};
  overflow-wrap: anywhere;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.normal};
  padding: ${spacer.sm};
  color: ${({ selectedTab, href }) => (selectedTab === href ? colors.white : colors.primary400)};
  cursor: pointer;
  text-align: center;
  background-color: ${({ selectedTab, href }) => (selectedTab === href ? colors.primary300 : colors.primary200)};
  &:not(:last-child) {
    border-bottom: ${({ selectedTab, href }) => (selectedTab === href ? 'none' : `1px solid ${colors.primary400}`)};
  }
  ${media.lg`
    flex:1;
    border-bottom:none !important;
    height:auto;
    min-height:auto;

  `}
`;
