import React, { useState } from "react";
import Logo from "assets/images/logo-light.svg";
import styled, { css } from "styled-components";
import { rgba, colors, spacer, fontWeight } from "settings/style";
import { Container, Button, Modal, FormItem } from "components";
import { Input } from "antd";

const headerRoutes = [
  { name: "Home" },
  { name: "Group and Event search", selected: true },
  { name: "Start new Group / Event" },
];
export const Header = ({ light }) => {
  const [modalVisibility, setModal] = useState(false);
  return (
    <HeaderWrapper light={light}>
      <Container>
        <Modal
          title="Basic Modal"
          visible={modalVisibility}
          onRight={() => setModal(false)}
          onRightText="Login"
          onLeft={() => {}}
          onLeftText="I don’t have account"
          onCancel={() => setModal(false)}
        >
          <FormItem label="Field A" theme="dark">
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem label="Field B" theme="dark">
            <Input placeholder="input placeholder" />
          </FormItem>
        </Modal>

        <div className="header-row">
          <div className="logo-cont">
            <img src={Logo} alt="polgozar" />
          </div>
          <nav className="menu-container">
            <ul className="menu-links">
              {headerRoutes.map((item) => (
                <li className="menu-links__item" key={item.name}>
                  <MenuLink href="" selected={item.selected} light={light}>
                    {item.name}
                  </MenuLink>
                </li>
              ))}
            </ul>
            <div className="login-signup">
              <Button
                type="link"
                color={light ? "white" : "primary"}
                onClick={() => setModal(true)}
              >
                Login
              </Button>
              <Button color="accent" type="dark">
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

const MenuLink = styled.a`
  color: ${({ selected, light }) =>
    selected ? colors.accent : light ? colors.white : colors.primary};
  font-weight: ${fontWeight.bold};
  padding: ${spacer.sm};
  padding-bottom: ${spacer.sm};
  &:hover {
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
    background-color: ${light ? "transparent" : colors.gray600};
    .header-row {
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-cont {
        img {
          width: 10rem;
        }
      }
      .menu-container {
        ${light &&
        css`
          border-bottom: 1px solid ${rgba(colors.accent, 0.4)};
        `}

        display: flex;
        .menu-links {
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
