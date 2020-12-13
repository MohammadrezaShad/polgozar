import React from 'react';

import { StyledTab, StyledWrapper } from './tabs.styled';

interface TabsItem {
  path: string;
  text: string;
}

interface TabsProps {
  onClick?: (href: string) => void;
  selectedTab: string;
  height?: string;
  width?: string;
  matchParent?: boolean;
  items?: TabsItem[];
  refTag?: boolean;
}

const Tabs = ({ onClick, items = [], selectedTab, height, width, matchParent, refTag }: TabsProps) => {
  return (
    <StyledWrapper>
      {items.map(({ text, path }) => {
        return (
          <StyledTab
            as={refTag ? 'a' : 'div'}
            key={path}
            href={path}
            height={height}
            matchParent={matchParent}
            width={width}
            selectedTab={selectedTab}
            onClick={() => onClick && onClick(path)}
          >
            {text}
          </StyledTab>
        );
      })}
    </StyledWrapper>
  );
};

export default Tabs;
