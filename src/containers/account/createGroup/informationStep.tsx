import React from 'react';
import { FormItem } from 'components/elements';
import { Input } from 'antd';

function InformationStep() {
  return (
    <>
      <FormItem
        name="name"
        label="Title"
        theme="primary"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input placeholder="Enter Your Group Title" />
      </FormItem>
      <FormItem
        name="description"
        label="Description"
        theme="primary"
        fullRounded={false}
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input.TextArea placeholder="Enter Your Group Description" autoSize={{ minRows: 8 }} bordered={false} />
      </FormItem>
    </>
  );
}

export default InformationStep;
