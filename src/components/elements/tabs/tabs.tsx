import React from 'react';

import { StyledTab } from './tabs.styled';

interface TabsItem {
  href: string;
  text: string;
  id: number;
}

interface TabsProps {
  onClick?: (id: number, href: string) => void;
  selectedTab: number;
  height?: string;
  width?: string;
  matchParent?: boolean;
  items?: TabsItem[];
}

const Tabs = ({ onClick, items = [], selectedTab, height, width, matchParent }: TabsProps) => {
  return (
    <>
      {items.map(({ text, href, id }) => {
        return (
          <StyledTab
            key={id}
            itemId={id}
            height={height}
            matchParent={matchParent}
            width={width}
            selectedTab={selectedTab}
            onClick={() => onClick && onClick(id, href)}
          >
            {text}
          </StyledTab>
        );
      })}
    </>
  );
};

export default Tabs;
