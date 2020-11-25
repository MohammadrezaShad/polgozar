import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Table, Select } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import { getALlGroups, updateGroupStatus } from 'graphql/queries/groups';
import { Link } from 'react-router-dom';

const { Option } = Select;

enum StatusColors {
  approved = '#06C049',
  pending = 'gray',
  rejected = 'red',
}

const ManageGroups = () => {
  const { loading, data } = useQuery(getALlGroups);
  const [updateStatus] = useMutation(updateGroupStatus);

  const chageGroupStatus = useCallback(
    (status: string, groupId: string) => {
      console.log({ groupId, status }, 'XXXXXXX');
      updateStatus({ variables: { groupId, status } });
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
