import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/elements';
import { Table, Space } from 'antd';
import { useQuery } from '@apollo/client';
import { getALlGroups } from 'graphql/queries/groups';
import { Link } from 'react-router-dom';

const columns = [
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

const ManageGroups = () => {
  const { loading, data } = useQuery(getALlGroups);
  console.log(data, 'groupss');
  const tableData = data && data.groups ? data.groups : [];
  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={tableData} loading={loading} pagination={{ pageSize: 20 }} />
    </Wrapper>
  );
};

export default ManageGroups;

const Wrapper = styled.div``;
