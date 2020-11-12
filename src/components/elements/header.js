import React, { useState, useCallback, useEffect } from 'react';
import Logo from 'assets/images/logo-light.svg';
import styled, { css } from 'styled-components';
import { rgba, colors, spacer, fontWeight, media } from 'settings/style';
import { Container, Button, Modal, FormItem } from 'components/elements';
import { Input, Form, Drawer, Select, Row, Col } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import { ThreeBarsIcon } from '@primer/octicons-react';
import useLogin from 'hooks/useLogin';
import { getMyAccount } from 'graphql/queries/users';
import { useLazyQuery } from '@apollo/client';

const headerRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Group and Event search', path: '/fsa' },
  { name: 'Start new Group / Event', path: '/fsa' },
];
export const Header = ({ light = true }) => {
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [signupVisibility, setSignupVisibility] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [loginForm] = Form.useForm();
  const [signupForm] = Form.useForm();
  const [loginLoading, onLogin] = useLogin();
  const [getMyProfile, { loading, error, data }] = useLazyQuery(getMyAccount);

  console.log('PROFILE DATA', loading, error, data);
  useEffect(() => {
    console.log('PROFILE FETCCHHHHH CALLEDDD');
    getMyProfile();
  }, [getMyProfile]);
  const onFinish = (values) => {
    console.log('Finish:', values);
    onLogin(values, () => setLoginVisibility(false));
  };

  const toSignup = useCallback(() => {
    setLoginVisibility(false);
    setSignupVisibility(true);
  }, []);

  const toLogin = useCallback(() => {
    setSignupVisibility(false);
    setLoginVisibility(true);
  }, []);

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="86">+1</Option>
        <Option value="87">+98</Option>
      </Select>
    </Form.Item>
  );

  return (
    <HeaderWrapper light={light}>
      <Drawer title="Basic Drawer" placement="left" closable={false} onClose={() => setDrawer(false)} visible={drawer}>
        <Menu light={light} />
      </Drawer>

      <Container>
        <Modal
          title="Log In"
          visible={loginVisibility}
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

        <Modal
          title="Sign up"
          visible={signupVisibility}
          onRight={() => {}}
          onRightProps={{ isLoading: false }}
          onRightText="Continue"
          onLeft={toLogin}
          onLeftText="I have account"
          onCancel={() => setSignupVisibility(false)}
        >
          <Form layout="vertical" form={signupForm} onFinish={onFinish}>
            <Row gutter={[24]}>
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
                ({ getFieldValue }) => ({
                  validator(rule, value) {
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

        <div className="header-row">
          <Button shape="link" className="hamburger-menu" onClick={() => setDrawer(true)}>
            <ThreeBarsIcon size="medium" />
          </Button>
          <div className="logo-cont">
            <img src={Logo} alt="polgozar" />
          </div>
          <nav className="menu-container">
            <Menu light={light} />
            <div className="login-signup">
              <Button shape="link" color={light ? 'white' : 'primary'} onClick={() => setLoginVisibility(true)}>
                Login
              </Button>
              <Button color="accent" shape="dark" onClick={() => setSignupVisibility(true)}>
                Sing up
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const Menu = (light) => {
  return (
    <ul className="menu-links">
      {headerRoutes.map((item) => (
        <li className="menu-links__item" key={item.name}>
          <MenuLink to={item.path} light={light} activeClassName="selected">
            {item.name}
          </MenuLink>
        </li>
      ))}
    </ul>
  );
};
const MenuLink = styled(({ light, ...props }) => <Link {...props} />)`
  color: ${({ light }) => (light ? colors.white : colors.primary)};
  font-weight: ${fontWeight.bold};
  padding: ${spacer.sm};
  padding-bottom: ${spacer.sm};
  &:hover {
    color: ${colors.accent};
  }
  &.selected {
    color: ${colors.accent};
  }
`;
const HeaderWrapper = styled.header`
  ${({ light }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: ${spacer.lg} 0;
    background-color: ${light ? 'transparent' : colors.gray600};
    .header-row {
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-cont {
        ${media.lg`
          flex: 1;
        `}
        img {
          width: 10rem;
          margin: auto;
        }
      }
      .hamburger-menu {
        ${media.lg`
          flex: 1;
          text-align: left;
        `}
        display: none;
        color: white;
        ${media.lg`
          display: block;
        `}
      }
      .menu-container {
        ${media.lg`
          flex: 1;
          justify-content: flex-end;
        `}

        ${light &&
        css`
          border-bottom: 1px solid ${rgba(colors.accent, 0.4)};
          ${media.lg`
            border-bottom: none;
          `}
        `}

        display: flex;
        .menu-links {
          ${media.lg`
            display: none;
          `}
          border-right: 1px solid ${light ? colors.white : colors.primary};

          display: flex;
          .menu-links__item {
            margin: 0 ${spacer.sm};
          }
        }
      }
    }
  `}
`;
