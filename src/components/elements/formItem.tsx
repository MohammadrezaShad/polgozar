import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacer, rgba, radius, ColorTypes, fontSize } from 'settings/style';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

type ThemeType = 'primary' | 'dark';
type MappedColorItemType = {
  [key in ThemeType]: ColorTypes;
};

interface MappedColorType {
  bg: MappedColorItemType;
  placeholder: MappedColorItemType;
  border: MappedColorItemType;
  font: MappedColorItemType;
  label: MappedColorItemType;
}

interface FormItemPropTypes extends FormItemProps {
  theme?: ThemeType;
  noStyle?: boolean;
  fullRounded?: boolean;
}

const mappedColors: MappedColorType = {
  bg: {
    primary: 'primary',
    dark: 'gray400',
  },
  placeholder: {
    primary: 'primary300',
    dark: 'gray500',
  },
  border: {
    primary: 'primary300',
    dark: 'transparent',
  },
  font: {
    primary: 'font',
    dark: 'white',
  },
  label: {
    primary: 'gray700',
    dark: 'gray300',
  },
};

const FormItemWrapper = styled.div<{ color: ThemeType; noStyle?: boolean; fullRounded?: boolean }>`
  ${({ color, noStyle, fullRounded = true }) => css`
    .ant-form-item-control-input {
      border-color: ${colors[mappedColors.border[color]]};
      border-radius: ${fullRounded ? radius.xl : radius.lg};
      ${!noStyle &&
      css`
        padding: ${spacer.sm} ${spacer.lg};
        background-color: ${rgba(colors[mappedColors.bg[color]], 0.3)};
      `}

      .ant-input-group-addon {
        background-color: ${noStyle ? 'transparent' : rgba(colors[mappedColors.bg[color]], 0.3)};
        border-color: ${colors[mappedColors.border[color]]};
        border-radius: ${radius.xl};
        .ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input)
          .ant-select-selector {
          border: none;
          box-shadow: none;
        }
        & + input {
          margin-left: ${spacer.md};
        }
      }
      &:hover {
        background-color: ${noStyle ? 'transparent' : rgba(colors[mappedColors.bg[color]], 0.2)};
      }
      input {
        box-shadow: none;
        color: ${colors[mappedColors.font[color]]};
        background: transparent;
        border: none;
        padding: 0;
        &:hover {
          border-color: ${colors[mappedColors.border[color]]};
          background: transparent;
        }
        &:focus,
        .ant-input-focused {
          border: none;
          box-shadow: none;
        }
        ::placeholder {
          color: ${colors[mappedColors.placeholder[color]]};
          opacity: 1;
        }
      }
      textarea {
        padding: 0;
        ::placeholder {
          color: ${colors[mappedColors.placeholder[color]]};
          opacity: 1;
        }
      }
      .ant-input-affix-wrapper,
      .ant-input-affix-wrapper-focused {
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
        &:focus {
          border: none;
          box-shadow: none;
        }
      }
    }
    .ant-form-item-label > label {
      color: ${colors[mappedColors.label[color]]};
      padding-left: ${spacer.xs};
    }
    .ant-form-item-explain {
      font-size: ${fontSize.sm};
      padding-left: ${spacer.md};
      color: ${colors.danger};
    }

    .ant-form-item-has-error .ant-input,
    .ant-form-item-has-error .ant-input:focus,
    .ant-form-item-has-error .ant-input-affix-wrapper:focus,
    .ant-form-item-has-error .ant-input-focused,
    .ant-form-item-has-error .ant-input-affix-wrapper-focused {
      background-color: transparent;
      border-color: transparent;
      border: none;
      box-shadow: none;
    }
  `}
`;

const FormItem = ({ theme = 'primary', noStyle, fullRounded, ...rest }: FormItemPropTypes) => {
  return (
    <FormItemWrapper color={theme} noStyle={noStyle} fullRounded={fullRounded}>
      <Form.Item {...rest} />
    </FormItemWrapper>
  );
};

export default FormItem;
