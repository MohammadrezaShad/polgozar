import React from "react";
import styled, { css } from "styled-components";
import { colors, spacer, rgba, radius } from "settings/style";
import { Form } from "antd";

// interface InputProps {
//   color: "primary" | "gray"
// }

const FormItem = ({ theme = "primary", ...props }) => {
  return (
    <FormItemWrapper color={theme}>
      <Form.Item {...props} />
    </FormItemWrapper>
  );
};

const mappedColors = {
  bg: {
    primary: "primary",
    dark: "gray400",
  },
  placeholder: {
    primary: "primary300",
    dark: "gray500",
  },
  border: {
    primary: "primary300",
    dark: "transparent",
  },
  font: {
    primary: "font",
    dark: "white",
  },
  label: {
    primary: "gray700",
    dark: "gray300",
  },
};

const FormItemWrapper = styled.div`
  ${({ color }) => css`
    .ant-input {
      background-color: ${rgba(colors[mappedColors.bg[color]], 0.3)};
      border-color: ${colors[mappedColors.border[color]]};
      border-radius: ${radius.xl};
      padding: ${spacer.sm} ${spacer.lg};
      box-shadow: none;
      color: ${colors[mappedColors.font[color]]};
      &:hover {
        border-color: ${colors[mappedColors.border[color]]};
      }
      &:focus,
      .ant-input-focused {
        background-color: ${rgba(colors[mappedColors.bg[color]], 0.2)};
        border-color: ${colors[mappedColors.border[color]]};
        box-shadow: none;
      }
      ::placeholder {
        color: ${colors[mappedColors.placeholder[color]]};
        opacity: 1;
      }
    }
    .ant-form-item-label > label {
      color: ${colors[mappedColors.label[color]]};
    }
  `}
`;

export default FormItem;
