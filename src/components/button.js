import styled, { css } from "styled-components";
import { colors, fontWeight, spacer, radius, rgba } from "settings/style";

// interface buttonProps {
//   rounded?: boolean;
//   color?: "primary" | "accent" | "danger" | "white" | "font";
//   size?: "sm" | "md" | "lg";
//   type?: "outline" | "opacity" | "dark" | "link";
// }

const Container = styled.button`
  ${({ rounded = true, color = "accent", size = "md", type = "dark" }) => css`
    display: inline-block;
    border: none;
    outline: none;
    margin: 0;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    text-decoration: none;
    border-width: 1px;
    border-style: solid;

    font-weight: ${fontWeight.bold}
    border-radius: ${rounded ? radius.xl : 0};
    padding: ${spacer.sm} ${spacer.lg};

    ${
      type === "dark" &&
      css`
        border-color: ${colors[color]};
        background: ${colors[color]};
        color: ${color === "danger" ? colors.white : colors.black};
        &:hover {
          background-color: ${colors.white};
          border-color: ${colors.white};
          color: ${color === "danger" ? colors.black : colors[color]};
        }
      `
    }

    ${
      ["outline", "opacity"].includes(type) &&
      css`
        border-color: ${type === "outline" ? colors[color] : "transparent"};
        background: ${type === "outline"
          ? "transparent"
          : rgba(colors[color], 0.3)};
        color: ${colors[color]};
        &:hover {
          background-color: ${colors[color]};
          color: ${colors.white};
        }
      `
    }

    ${
      type === "link" &&
      css`
        border: none;
        color: ${colors[color]};
        &:hover {
          color: ${rgba(colors.accent, color === "accent" ? 0.7 : 1)};
        }
      `
    }
  `}
`;

export default Container;
