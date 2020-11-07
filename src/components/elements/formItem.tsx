import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacer, rgba, radius, ColorTypes } from 'settings/style';
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
  theme: ThemeType;
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

const FormItemWrapper = styled.div<{ color: ThemeType }>`
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
      padding-left: ${spacer.xs};
    }
  `}
`;

const FormItem = ({ theme = 'primary', ...rest }: FormItemPropTypes) => {
  return (
    <FormItemWrapper color={theme}>
      <Form.Item {...rest} />
    </FormItemWrapper>
  );
};

export default FormItem;
