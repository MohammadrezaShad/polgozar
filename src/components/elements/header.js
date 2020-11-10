import React, { useState, useEffect, useCallback } from 'react';
import Logo from 'assets/images/logo-light.svg';
import styled, { css } from 'styled-components';
import { rgba, colors, spacer, fontWeight, media } from 'settings/style';
import { Container, Button, Modal, FormItem } from 'components/elements';
import { Input, Form, Drawer } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import { ThreeBarsIcon } from '@primer/octicons-react';
import useLogin from 'hooks/useLogin';

const headerRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Group and Event search', path: '/fsa' },
  { name: 'Start new Group / Event', path: '/fsa' },
];
export const Header = ({ light = true }) => {
  const [modalVisibility, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [loginForm] = Form.useForm();
  const [loginLoading, onLogin] = useLogin();

  const onFinish = (values) => {
    console.log('Finish:', values);
    onLogin(values, () => setModal(false));
  };
  return (
    <HeaderWrapper light={light}>
      <Drawer title="Basic Drawer" placement="left" closable={false} onClose={() => setDrawer(false)} visible={drawer}>
        <Menu light={light} />
      </Drawer>

      <Container>
        <Modal
          title="Log In"
          visible={modalVisibility}
          onRight={() => loginForm.submit()}
          onRightProps={{ isLoading: loginLoading }}
          onRightText="Login"
          onLeft={() => {}}
          onLeftText="I don’t have account"
          onCancel={() => setModal(false)}
        >
          <Form layout="vertical" form={loginForm} onFinish={onFinish}>
            <FormItem
              name="email"
              label="Email"
              theme="dark"
              rules={[{ required: true, message: 'Email is required!' }, { type: 'email' }]}
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
              <Button shape="link" color={light ? 'white' : 'primary'} onClick={() => setModal(true)}>
                Login
              </Button>
              <Button color="accent" shape="dark">
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
