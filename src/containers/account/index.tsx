import React from 'react';
import styled from 'styled-components';
import { Link, RouteComponentProps } from 'react-router-dom';
import AccountRouter from './router';

export default function Account({ match }: RouteComponentProps) {
  return (
    <Wrapper>
      <section className="scrollableSidebarMenu">
        <Link to={`${match.url}/profile`}>Profile Details</Link>
        <Link to={`${match.url}/Messages`}>Messages</Link>
        <Link to={`${match.url}/family-tree`}>Family Tree</Link>
        <Link to={`${match.url}/events`}>Events</Link>
        <Link to={`${match.url}/groups`}>Groups</Link>
      </section>
      <div
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <AccountRouter url={match.url} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
