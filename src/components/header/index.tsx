import React, { useState, useEffect } from 'react';
import Logo from 'assets/images/logo-light.svg';
import styled, { css } from 'styled-components';
import { rgba, colors, spacer, fontWeight, media } from 'settings/style';
import { Container, Button } from 'components/elements';
import { Drawer } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { ThreeBarsIcon } from '@primer/octicons-react';
import { getMyAccount } from 'graphql/queries/users';
import { useLazyQuery } from '@apollo/client';
import LoginModal from 'components/login';
import SginupModal from 'components/signup';
import { loginModalVisible, signupModalVisible } from 'cache';
import { logout } from 'services/auth';
import { useLoggedInStateQuery } from 'graphql/types';

const headerRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Group and Event search', path: '/fsa' },
  { name: 'Start new Group / Event', path: '/fsa' },
];
export default function Header({ light = true }) {
  const useLoggedInStateResult = useLoggedInStateQuery();
  const isLoggedIn = useLoggedInStateResult.data?.loggedInState;

  const [drawer, setDrawer] = useState(false);
  const [getMyProfile, { data: myProfile }] = useLazyQuery(getMyAccount);

  console.log('myProfile', myProfile);
  useEffect(() => {
    if (isLoggedIn) {
      getMyProfile();
    }
  }, [getMyProfile, isLoggedIn]);

  const onSignup = () => {
    loginModalVisible(true);
  };

  const onLogin = () => {
    signupModalVisible(true);
  };

  return (
    <HeaderWrapper light={light}>
      <Drawer title="Basic Drawer" placement="left" closable={false} onClose={() => setDrawer(false)} visible={drawer}>
        <Menu light />
      </Drawer>
      <Container>
        <LoginModal />
        <SginupModal />
        <div className="header-row">
          <Button shape="link" className="hamburger-menu" onClick={() => setDrawer(true)}>
            <ThreeBarsIcon size="medium" />
          </Button>
          <div className="logo-cont">
            <Link to="/">
              <img src={Logo} alt="polgozar" />
            </Link>
          </div>
          <nav className="menu-container">
            <Menu light={light} />
            <div className="login-signup">
              {isLoggedIn ? (
                <Button shape="link" color={light ? 'white' : 'primary'} onClick={() => logout()}>
                  Logout
                </Button>
              ) : (
                <Button shape="link" color={light ? 'white' : 'primary'} onClick={onLogin}>
                  Login
                </Button>
              )}
              <Button color="accent" shape="dark" onClick={onSignup}>
                Sing up
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </HeaderWrapper>
  );
}

interface MenuProps {
  light: boolean;
}

const Menu = ({ light }: MenuProps) => {
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

const MenuLink = styled(({ light, ...props }) => <NavLink {...props} />)`
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

interface HeaderWrapperProps {
  light: boolean;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  ${({ light }) => css`
    position: ${light ? 'absolute' : 'relative'};
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
        .login-signup {
          align-items: center;
          display: flex;
        }
        ${media.lg`
          flex: 1;
          justify-content: flex-end;
        `}

        ${light &&
        css`
          position: relative;
          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: ${rgba(colors.accent, 0.4)};
            position: absolute;
            bottom: -${spacer.md};
            ${media.lg`
              height: 0;
            `}
          }
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
