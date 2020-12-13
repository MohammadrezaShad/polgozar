import React, { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import { Tabs } from 'components/elements';
import { StyledWrapper, StyledTabsWrap, StyledLayout } from './index.styled';
import AccountRouter from './router';

export default function Account({ match }: RouteComponentProps) {
  const [selectedTab, setSelectedTab] = useState('/profile');
  const history = useHistory();
  const clickHandler = (path: string) => {
    history.push(`${match.url}${path}`);
    setSelectedTab(path);
  };
  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledTabsWrap>
          <Tabs
            items={[
              { text: 'Profile Details', path: '/profile' },
              { text: 'Messages', path: '/Messages' },
              { text: 'Family Tree', path: '/family-tree' },
              { text: 'Events', path: '/events' },
              { text: 'Groups', path: '/groups' },
            ]}
            matchParent
            width="105px"
            height="100px"
            selectedTab={selectedTab}
            onClick={clickHandler}
          />
        </StyledTabsWrap>
        <AccountRouter url={match.url} />
      </StyledLayout>
    </StyledWrapper>
  );
}
