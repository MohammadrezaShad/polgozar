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
import { useGlobalStore, ActionConstantType } from 'stores/globalStore';
import { logout } from 'services/auth';

const headerRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Group and Event search', path: '/fsa' },
  { name: 'Start new Group / Event', path: '/fsa' },
];
export const Header = ({ light = true }) => {
  const [drawer, setDrawer] = useState(false);
  const [getMyProfile, { data }] = useLazyQuery(getMyAccount);
  const { state, dispatch } = useGlobalStore();

  useEffect(() => {
    if (state.isLoggedIn) {
      getMyProfile();
    }
  }, [getMyProfile, state]);

  console.log('MY PROFILE DATA: ', data);

  const onSignup = () => {
    dispatch({ type: ActionConstantType.SET_SIGNUP_VISIBLE, payload: true });
  };

  const onLogin = () => {
    dispatch({ type: ActionConstantType.SET_LOGIN_VISIBLE, payload: true });
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
              {state.isLoggedIn ? (
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
