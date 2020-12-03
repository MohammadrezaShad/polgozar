import React from 'react';
import { Modal, FormItem } from 'components/elements';
import { Row, Col, Input, Form, Select } from 'antd';
import { loginModalVisible, signupModalVisible } from 'cache';
import { useSignupModalVisibilityQuery, useUpdateProfileMutation } from 'graphql/types';
import useRegister from 'hooks/useRegister';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

interface SignupProps {
  firstname: string;
  lastname: string;
  email: string;
  prefix: string;
  phone: string;
  password: string;
}

const prefixSelector = (
  <Form.Item name="prefix" noStyle initialValue="+1">
    <Select style={{ width: 80 }}>
      <Option value="+1">+1</Option>
      <Option value="+98">+98</Option>
    </Select>
  </Form.Item>
);

function Signup() {
  const useSignupModalVisibilityResult = useSignupModalVisibilityQuery();
  const [loginLoading, onRegisters] = useRegister();
  const history = useHistory();
  const [updateUserProfile] = useUpdateProfileMutation();

  const [signupForm] = Form.useForm();
  const setSignupVisibility = (visible: boolean) => {
    signupModalVisible(visible);
  };

  const onSigupSuccess = () => {
    console.log('doneee');
    history.push('/account');
    setSignupVisibility(false);
  };

  const onFinish = (values: SignupProps) => {
    const { firstname, lastname, email, prefix, phone, password } = values;
    console.log({
      firstname,
      lastname,
      email,
      phone: prefix + phone,
      password,
    });
    onRegisters({ firstname, lastname, password, email }, () => {
      onSigupSuccess();
      updateUserProfile({ variables: { input: { lastname: '7777' } } });
    });
  };

  const toLogin = () => {
    setSignupVisibility(false);
    loginModalVisible(true);
  };

  return (
    <Modal
      title="Sign up"
      visible={useSignupModalVisibilityResult.data?.signupModalVisible}
      onRight={() => signupForm.submit()}
      onRightProps={{ isLoading: loginLoading }}
      onRightText="Continue"
      onLeft={toLogin}
      onLeftText="I have account"
      onCancel={() => setSignupVisibility(false)}
      destroyOnClose
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
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { len: 10, message: 'Phone Number should be 10 digit' },
          ]}
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
