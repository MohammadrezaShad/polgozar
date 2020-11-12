import React from 'react';
import { Modal, FormItem } from 'components/elements';
import { Input, Form } from 'antd';
import useLogin from 'hooks/useLogin';
import { useGlobalStore, ActionConstantType } from 'stores/globalStore';
import { LoginReq } from 'services/auth';

function Login() {
  const {
    state: { loginModalVisible },
    dispatch,
  } = useGlobalStore();
  const [loginLoading, onLogin] = useLogin();
  const [loginForm] = Form.useForm();

  const setLoginVisibility = (visible: boolean) => {
    dispatch({ type: ActionConstantType.SET_LOGIN_VISIBLE, payload: visible });
  };

  const onFinish = (values: LoginReq) => {
    onLogin(values, () => setLoginVisibility(false));
  };

  const toSignup = () => {
    setLoginVisibility(false);
    dispatch({ type: ActionConstantType.SET_SIGNUP_VISIBLE, payload: true });
  };

  return (
    <Modal
      title="Log In"
      visible={loginModalVisible}
      onRight={() => loginForm.submit()}
      onRightProps={{ isLoading: loginLoading }}
      onRightText="Login"
      onLeft={toSignup}
      onLeftText="I don’t have account"
      onCancel={() => setLoginVisibility(false)}
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
