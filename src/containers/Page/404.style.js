import styled from 'styled-components';
import { colors, radius } from 'settings/style';

const FourZeroFourStyleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .iso404Content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    @media only screen and (max-width: 767px) {
      order: 2;
      margin-top: 20px;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }

    h1 {
      font-size: 84px;
      color: ${colors.dark};
      font-weight: 700;
      line-height: 1;
      margin: 0 0 25px;
    }

    h3 {
      font-size: 24px;
      color: ${colors.dark};
      font-weight: 400;
      margin: 0 0 10px;
      line-height: 1.2;
    }

    p {
      font-size: 14px;
      color: ${colors.gray};
      font-weight: 400;
      margin: 0 0 10px;
    }

    button {
      display: inline-block;
      margin-top: 15px;
      margin-bottom: 0;
      font-weight: 500;
      text-align: center;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 0;
      white-space: nowrap;
      line-height: 1.5;
      padding: 0 30px;
      font-size: 13px;
      flex-shrink: 0;
      height: 36px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: relative;
      color: #ffffff;
      background-color: ${colors.primary};
      ${radius.sm};

      a {
        width: 100%;
        height: 100%;
        color: #ffffff;
        text-decoration: none;
      }

      &:hover {

        a {
        background-color: ${colors.primary};
        }
          text-decoration: none;
        }
      }

      &:focus {
        outline: 0;
        box-shadow: none;

        a {
          text-decoration: none;
        }
      }
    }
  }

  .iso404Artwork {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:  100px;
    margin-right: inherit;
    height: 500px;

    @media only screen and (max-width: 767px) {
      margin-left: 0;
      margin-right: inherit;
    }

    img {
      max-height: 100%;
    }
`;

export default FourZeroFourStyleWrapper;
