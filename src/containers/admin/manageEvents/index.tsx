import React, { useRef } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { useGetAllEventsQuery } from 'graphql/types';
import moment from 'moment';

const ManageUsers = () => {
  const { loading, data } = useGetAllEventsQuery();
  const tableData = data && data.events ? data.events : [];
  const columns = useRef([
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
  ]).current;
  return (
    <Wrapper>
      <Table rowKey="id" columns={columns} dataSource={tableData} loading={loading} pagination={{ pageSize: 20 }} />
    </Wrapper>
  );
};

export default ManageUsers;

const Wrapper = styled.div``;
