import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, TeamOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo-light.svg';
import { colors } from 'settings/style';
import AdminRouter from './router';

const { Header, Sider, Content } = Layout;

export default function AdminApp({ match, location }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Wrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Link to="/" className="logoCont">
            <img src={Logo} alt="polgozar" />
          </Link>
          <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key={`${match.url}/users`} icon={<UserOutlined />}>
              <Link to={`${match.url}/users`}>Users</Link>
            </Menu.Item>
            <Menu.Item key={`${match.url}/events`} icon={<ScheduleOutlined />}>
              <Link to={`${match.url}/events`}>Events</Link>
            </Menu.Item>
            <Menu.Item key={`${match.url}/groups`} icon={<TeamOutlined />}>
              <Link to={`${match.url}/groups`}>Groups</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <AdminRouter url={match.url} />
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > .ant-layout-has-sider {
    min-height: 100vh;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  .logoCont {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    img {
      width: 70%;
      margin: auto;
    }
  }
  .ant-menu-dark .ant-menu-item-selected > a,
  .ant-menu-dark .ant-menu-item-selected > span > a,
  .ant-menu-dark .ant-menu-item-selected > a:hover,
  .ant-menu-dark .ant-menu-item-selected > span > a:hover,
  .ant-menu-dark .ant-menu-item-selected .anticon {
    color: black;
  }
  a {
    color: ${colors.primary};
  }
`;
