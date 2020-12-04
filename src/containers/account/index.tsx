import React, { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import { Tabs } from 'components/elements';
import { StyledWrapper, StyledTabsWrap, StyledLayout } from './index.styled';
import AccountRouter from './router';

export default function Account({ match }: RouteComponentProps) {
  const [selectedTab, setSelectedTab] = useState(1);
  const history = useHistory();
  const clickHandler = (id: number, href: string) => {
    history.push(`${match.url}${href}`);
    setSelectedTab(id);
  };
  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledTabsWrap>
          <Tabs
            items={[
              { id: 1, text: 'Profile Details', href: '/profile' },
              { id: 2, text: 'Messages', href: '/Messages' },
              { id: 3, text: 'Family Tree', href: '/family-tree' },
              { id: 4, text: 'Events', href: '/events' },
              { id: 5, text: 'Groups', href: '/groups' },
            ]}
            matchParent
            width="105px"
            height="200px"
            selectedTab={selectedTab}
            onClick={clickHandler}
          />
        </StyledTabsWrap>
        <AccountRouter url={match.url} />
      </StyledLayout>
    </StyledWrapper>
  );
}
