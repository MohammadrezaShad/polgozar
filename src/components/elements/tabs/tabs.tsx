import React from 'react';

import { StyledTab } from './tabs.styled';

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
}

const Tabs = ({ onClick, items = [], selectedTab, height, width, matchParent }: TabsProps) => {
  return (
    <>
      {items.map(({ text, path }) => {
        return (
          <StyledTab
            key={path}
            path={path}
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
    </>
  );
};

export default Tabs;
