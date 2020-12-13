import React, { useMemo } from 'react';
import { FormItem, SearchBox } from 'components/elements';
import { Input, Select, DatePicker, Row, Col } from 'antd';
import { useGetMyAccountQuery } from 'graphql/types';

const { RangePicker } = DatePicker;

function InformationStep() {
  const { data: myAccount } = useGetMyAccountQuery();

  const options = useMemo(() => {
    const groups = myAccount?.myAccount?.ledGroups;
    return !groups || !groups.length ? [] : groups.map((group) => ({ value: group.id, label: group.name }));
  }, [myAccount]);

  return (
    <>
      <FormItem
        name="title"
        label="Title"
        theme="primary"
        rules={[
          {
            required: true,
            message: 'Please input your Title!',
          },
        ]}
      >
        <Input placeholder="Enter Your Group Title" />
      </FormItem>
      <Row gutter={12}>
        <Col xs={24} md={10}>
          <FormItem
            name="groupId"
            label="Select Your Group"
            theme="primary"
            rules={[
              {
                required: true,
                message: 'Please Select Your Group!',
              },
            ]}
          >
            <Select options={options} />
          </FormItem>
        </Col>
        <Col xs={24} md={14}>
          <FormItem
            name="dates"
            label="Select Your Start and Ent Date Time"
            theme="primary"
            rules={[
              {
                required: true,
                message: 'Please Select Your Dates!',
              },
            ]}
          >
            <RangePicker showTime={{ minuteStep: 15, format: 'h:mm a' }} format="YYYY-MM-DD / h:mm a" />
          </FormItem>
        </Col>
      </Row>

      <FormItem
        name="address"
        label="Address"
        theme="primary"
        rules={[
          {
            required: true,
            message: 'Please input your Address!',
          },
        ]}
      >
        <SearchBox />
      </FormItem>

      <FormItem
        name="description"
        label="Description"
        theme="primary"
        fullRounded={false}
        rules={[
          {
            required: true,
            message: 'Please input your Description!',
          },
        ]}
      >
        <Input.TextArea placeholder="Enter Your Group Description" autoSize={{ minRows: 8 }} bordered={false} />
      </FormItem>
    </>
  );
}

export default InformationStep;
