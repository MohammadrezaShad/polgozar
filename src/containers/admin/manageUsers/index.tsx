import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/elements';
import { Table, Space, Select } from 'antd';
import { useQuery } from '@apollo/client';
import { getALlUsers } from 'graphql/queries/users';
import { Link } from 'react-router-dom';
import { colors } from 'settings/style';

const { Option } = Select;
const changeUserStatus = (value: any) => {
  console.log(value);
};

enum StatusColors {
  approved = '#06C049',
  pending = 'gray',
  rejected = 'red',
}

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
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (text: keyof typeof StatusColors) => (
      <Select value={text} onChange={changeUserStatus} style={{ color: StatusColors[text] }}>
        <Option value="approved" style={{ color: StatusColors.approved }}>
          Approved
        </Option>
        <Option value="pending" style={{ color: StatusColors.pending }}>
          Pending
        </Option>
        <Option value="rejected" style={{ color: StatusColors.rejected }}>
          Rejected
        </Option>
      </Select>
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
