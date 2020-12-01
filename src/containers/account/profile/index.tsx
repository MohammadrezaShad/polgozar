import React from 'react';
import styled from 'styled-components';
import { useGetMyAccountQuery } from 'graphql/types';

const ManageUsers = () => {
  const { loading, data: myAccount } = useGetMyAccountQuery();

  return (
    <Wrapper>
      {loading && 'loading ....'}
      <pre>{JSON.stringify(myAccount, undefined, 4)}</pre>
    </Wrapper>
  );
};

export default ManageUsers;

const Wrapper = styled.div``;
