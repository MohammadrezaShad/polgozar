import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Table, Select } from 'antd';
import { Link } from 'react-router-dom';
import { colors } from 'settings/style';
import { useGetAllGroupsQuery, useUpdateGroupStatusMutation } from 'graphql/types';

const { Option } = Select;

const StatusColors = {
  approved: colors.success,
  pending: colors.gray500,
  rejected: colors.danger,
};

const ManageGroups = () => {
  const { loading, data } = useGetAllGroupsQuery();
  const [updateStatus] = useUpdateGroupStatusMutation();

  const chageGroupStatus = useCallback(
    (status: string, groupId: string) => {
      console.log({ groupId, status }, 'XXXXXXX');
      updateStatus({ variables: { input: { groupId, status } } });
    },
    [updateStatus],
  );

  const columns = useRef([
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Link to="admin/users">{text}</Link>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Organizers',
      dataIndex: 'organizers',
      key: 'organizers',
      render: (organizers: any) =>
        organizers.map((organizer: any) => (
          <Link key={organizer.id} to="admin/users">
            {organizer.name}
          </Link>
        )),
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: keyof typeof StatusColors, record: any) => (
        <Select
          value={text}
          onChange={(value) => chageGroupStatus(value, record.id)}
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

  const tableData = data && data.groups ? data.groups : [];
  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={tableData} loading={loading} pagination={{ pageSize: 20 }} />
    </Wrapper>
  );
};

export default ManageGroups;

const Wrapper = styled.div``;
