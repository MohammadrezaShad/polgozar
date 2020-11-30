import React from 'react';
import { Modal, FormItem } from 'components/elements';
import { Input, Form } from 'antd';
import useLogin from 'hooks/useLogin';
import { loginModalVisible, signupModalVisible } from 'cache';
import { LoginReq } from 'services/auth';
import { useLoginModalVisibilityQuery } from 'graphql/types';

function Login() {
  const [loginLoading, onLogin] = useLogin();
  const [loginForm] = Form.useForm();
  const useLoginModalVisibilityResult = useLoginModalVisibilityQuery();

  const onFinish = (values: LoginReq) => {
    onLogin(values, () => loginModalVisible(false));
  };

  const toSignup = () => {
    loginModalVisible(false);
    signupModalVisible(true);
  };

  return (
    <Modal
      title="Log In"
      visible={useLoginModalVisibilityResult.data?.loginModalVisible}
      onRight={() => loginForm.submit()}
      onRightProps={{ isLoading: loginLoading }}
      onRightText="Login"
      onLeft={toSignup}
      onLeftText="I don’t have account"
      onCancel={() => loginModalVisible(false)}
    >
      <Form layout="vertical" form={loginForm} onFinish={onFinish}>
        <FormItem
          name="email"
          label="Email"
          theme="dark"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </FormItem>
        <FormItem
          name="password"
          label="Password"
          theme="dark"
          rules={[{ required: true, message: 'Password is required!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </FormItem>
      </Form>
    </Modal>
  );
}

export default Login;
