import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/elements';
import { Table, Space } from 'antd';
import { useQuery } from '@apollo/client';
import { getALlEvents } from 'graphql/queries/events';
import { Link } from 'react-router-dom';
import moment from 'moment';

const columns = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => <Link to="admin/users">{text}</Link>,
  },
  {
    title: 'Group',
    dataIndex: 'group',
    key: 'group',
    render: (group: any) => <Link to="admin/users">{group.name}</Link>,
  },
  {
    title: 'Start',
    dataIndex: 'startTime',
    key: 'startTime',
    render: (time: string) => <span>{moment(time).format('lll')}</span>,
  },
  {
    title: 'End',
    dataIndex: 'endTime',
    key: 'endTime',
    render: (time: string) => <span>{moment(time).format('lll')}</span>,
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
  const { loading, data } = useQuery(getALlEvents);
  console.log(data, 'eventsss');
  const tableData = data && data.events ? data.events : [];
  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={tableData} loading={loading} pagination={{ pageSize: 20 }} />
    </Wrapper>
  );
};

export default ManageUsers;

const Wrapper = styled.div``;
