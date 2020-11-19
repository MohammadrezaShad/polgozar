import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/elements';
import { Table, Space } from 'antd';
import { useQuery } from '@apollo/client';
import { getALlUsers } from 'graphql/queries/users';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
    key: 'firstname',
    render: (text: string) => <Link to="admin/users">{text}</Link>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    key: 'lastname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },

  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button shape="link" onClick={() => {}}>
          Disable
        </Button>
      </Space>
    ),
  },
];

const ManageUsers = () => {
  const { loading, data } = useQuery(getALlUsers);
  console.log('usersss', data);
  const tableData = data && data.users ? data.users : [];
  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={tableData} loading={loading} pagination={{ pageSize: 20 }} />
    </Wrapper>
  );
};

export default ManageUsers;

const Wrapper = styled.div``;
