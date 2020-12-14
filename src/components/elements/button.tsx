import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fontWeight, spacer, radius, rgba } from 'settings/style';
import { Spinner } from 'components/elements';

export type ButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  onClick: (e?: React.MouseEvent) => void;
  rounded?: boolean;
  color?: 'primary' | 'accent' | 'danger' | 'white' | 'font';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'outline' | 'opacity' | 'dark' | 'link';
  isLoading?: boolean;
  disabled?: boolean;
  fontStyle?: 'sm' | 'md' | 'lg';
};

const ButtonComponent = ({ onClick, children, disabled, isLoading, ...otherProps }: ButtonComponentProps) => {
  return (
    <Button onClick={onClick} {...otherProps} disabled={disabled || isLoading}>
      {!!isLoading && <Spinner />}
      {children}
    </Button>
  );
};

const Button = styled.button<ButtonComponentProps>`
  ${({ rounded = true, color = 'accent', shape = 'dark', size = 'md' }: ButtonComponentProps) => css`
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

    font-weight: ${fontWeight.bold};
    border-radius: ${rounded ? radius.xl : 0};
    padding: ${size === 'lg' ? `${spacer.md} ${spacer.lg}` : `${spacer.sm} ${spacer.lg}`};
    &:disabled {
      cursor: not-allowed;
    }
    .loading {
      padding-right: ${spacer.md};
    }
    ${shape === 'dark' &&
    css`
      border-color: ${colors[color]};
      background: ${colors[color]};
      color: ${color === 'danger' ? colors.white : colors.black};
      .loading {
        color: ${color === 'danger' ? colors.white : colors.black};
      }
      &:hover {
        background-color: ${colors.white};
        border-color: ${colors.white};
        color: ${color === 'danger' ? colors.black : colors[color]};
        .loading {
          color: ${color === 'danger' ? colors.black : colors[color]};
        }
      }
    `}

    ${['outline', 'opacity'].includes(shape) &&
    css`
      border-color: ${shape === 'outline' ? colors[color] : 'transparent'};
      background: ${shape === 'outline' ? 'transparent' : rgba(colors[color], 0.3)};
      color: ${colors[color]};
      .loading {
        color: ${colors[color]};
      }
      &:hover {
        background-color: ${colors[color]};
        color: ${colors.white};
        .loading {
          color: ${colors.white};
        }
      }
    `}

    ${shape === 'link' &&
    css`
      border: none;
      color: ${colors[color]};
      .loading {
        color: ${colors[color]};
      }
      &:hover {
        color: ${rgba(colors.accent, color === 'accent' ? 0.7 : 1)};
        .loading {
          color: ${rgba(colors.accent, color === 'accent' ? 0.7 : 1)};
        }
      }
    `}
  `}
`;

export default ButtonComponent;
