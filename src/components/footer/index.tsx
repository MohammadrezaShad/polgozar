import React from 'react';
import Logo from 'assets/images/logo-light.svg';
import blurLogo from 'assets/images/footer_blur_logo.svg';
import styled from 'styled-components';
import { rgba, colors, spacer, fontSize, media } from 'settings/style';
import { Container, Button } from 'components/elements';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="content">
          <div className="left-col">
            <div className="logo-cont">
              <img src={Logo} alt="polgozar" />
            </div>
            <ul>
              <li>
                <i className="icon-pin" />
                Contact us: ....
              </li>
              <li>
                <i className="icon-pin" />
                Address: ....
              </li>
            </ul>
          </div>
          <div className="right-col">
            <p>
              Sample : We make a living by what we get, But we make a life by what we give.”“We make a living by what we
              get, But we make a life by what we give.”“We make a living by what we get, But we make a life by what we
              give.”
            </p>
            <div className="donate-btn-cont">
              <Button shape="opacity" color="primary" onClick={() => {}}>
                Donate here
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="copy-right-Wrapper">
        <Container>
          <div className="copy-right-container">
            <span>Copy right by …..</span>
            <div className="social-media">
              <a href="/#">
                <i className="icon-instagram" />
              </a>
              <a href="/#">
                <i className="icon-facebook" />
              </a>
              <a href="/#">
                <i className="icon-twitter" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  border-top: 0.4rem solid ${colors.accent};
  background-color: ${colors.gray900};
  color: ${colors.white};
  color: ${rgba(colors.white, 0.5)};
  .content {
    padding: 2rem 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    ${media.md`
      flex-direction: column;
    `}
    .logo-cont {
      width: 200px;
    }
    &:before {
      content: url(${blurLogo});
      position: absolute;
      left: -1rem;
      top: 1.5rem;
      filter: blur(0.4375rem);
    }
    .right-col {
      width: 45%;
      border-left: 1px solid ${rgba(colors.white, 0.5)};
      padding-left: 4rem;
      padding-top: ${spacer.xl};
      ${media.md`
        width: 100%;
        border-left: none;
        padding-left: 0;
      `} .donate-btn-cont {
        text-align: right;
        margin-top: ${spacer.xl};
      }
    }
    .left-col {
      ul {
        padding: ${spacer.lg};
        li {
          padding-top: ${spacer.sm};
          i {
            padding-right: ${spacer.md};
          }
        }
      }
    }
  }
  .copy-right-Wrapper {
    background-color: ${rgba(colors.gray600, 0.1)};
    .copy-right-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${spacer.lg};
      .social-media {
        a {
          i {
            color: ${rgba(colors.white, 0.5)};
            font-size: ${fontSize.xl};
          }
          &:hover i {
            color: ${rgba(colors.white, 0.8)};
          }
          padding-left: ${spacer.xl};
        }
      }
    }
  }
`;
