import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Table, Select } from 'antd';
import { Link } from 'react-router-dom';
import { colors } from 'settings/style';
import { useGetAllUsersQuery, useUpdateUserStatusMutation } from 'graphql/types';

const { Option } = Select;

const StatusColors = {
  approved: colors.success,
  pending: colors.gray500,
  rejected: colors.danger,
};

const ManageUsers = () => {
  const { loading, data } = useGetAllUsersQuery();
  const [updateStatus] = useUpdateUserStatusMutation();

  const tableData = data && data.users ? data.users : [];

  const changeUserStatus = useCallback(
    (status: string, userId: string) => {
      updateStatus({ variables: { input: { userId, status } } });
    },
    [updateStatus],
  );

  const columns = useRef([
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
      render: (text: keyof typeof StatusColors, record: any) => (
        <Select
          value={text}
          onChange={(value) => changeUserStatus(value, record.id)}
          style={{ color: StatusColors[text] }}
        >
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
  ]).current;

  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={tableData} loading={loading} pagination={{ pageSize: 20 }} />
    </Wrapper>
  );
};

export default ManageUsers;

const Wrapper = styled.div``;
