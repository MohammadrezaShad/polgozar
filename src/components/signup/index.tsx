import React from 'react';
import { Modal, FormItem } from 'components/elements';
import { Row, Col, Input, Form, Select } from 'antd';
import { loginModalVisible, signupModalVisible } from 'cache';
import { LoginReq } from 'services/auth';
import { useSignupModalVisibilityQuery } from 'graphql/types';

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 80 }}>
      <Option value="86">+1</Option>
      <Option value="87">+98</Option>
    </Select>
  </Form.Item>
);

function Signup() {
  const useSignupModalVisibilityResult = useSignupModalVisibilityQuery();

  const [signupForm] = Form.useForm();
  const setSignupVisibility = (visible: boolean) => {
    signupModalVisible(visible);
  };

  const onFinish = (values: LoginReq) => {
    console.log(values, 'signup');
  };

  const toLogin = () => {
    setSignupVisibility(false);
    loginModalVisible(true);
  };

  return (
    <Modal
      title="Sign up"
      visible={useSignupModalVisibilityResult.data?.signupModalVisible}
      onRight={() => {}}
      onRightProps={{ isLoading: false }}
      onRightText="Continue"
      onLeft={toLogin}
      onLeftText="I have account"
      onCancel={() => setSignupVisibility(false)}
    >
      <Form layout="vertical" form={signupForm} onFinish={onFinish}>
        <Row gutter={[24, 0]}>
          <Col xs={24} md={12}>
            <FormItem
              theme="dark"
              name="firstname"
              label="First Name"
              rules={[{ required: true, message: 'Please input your phone First Name!' }]}
            >
              <Input />
            </FormItem>
          </Col>
          <Col xs={24} md={12}>
            <FormItem
              theme="dark"
              name="lastname"
              label="Last Name"
              rules={[{ required: true, message: 'Please input your phone Last Name!' }]}
            >
              <Input />
            </FormItem>
          </Col>
        </Row>
        <FormItem
          theme="dark"
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} />
        </FormItem>
        <FormItem
          theme="dark"
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          theme="dark"
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </FormItem>
        <FormItem
          theme="dark"
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }: { getFieldValue: any }) => ({
              validator(rule: any, value: string) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </FormItem>
      </Form>
    </Modal>
  );
}

export default Signup;
