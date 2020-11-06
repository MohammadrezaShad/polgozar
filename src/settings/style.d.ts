import { ThemedCssFunction, DefaultTheme } from 'styled-components';

export type WindowSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type SpacerSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Colors =
  | 'primary'
  | 'accent'
  | 'errorColor'
  | 'primary100'
  | 'primary200'
  | 'primary300'
  | 'primary400'
  | 'primary500'
  | 'font'
  | 'white'
  | 'black'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'cream100'
  | 'red100'
  | 'danger'
  | 'red300'
  | 'red400'
  | 'transparent';
export type FontSizes = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';
export type FontTypes = 'sm' | 'md' | 'lg' | 'xl';

export const sizes: { [size in WindowSizes]: string };
export const media: { [size in WindowSizes]: ThemedCssFunction<DefaultTheme> };
export const maxWinSize: (size: WindowSizes) => boolean;
export const spacer: { [size in SpacerSizes]: string };
export const colors: { [color in Colors]: string };
export const fontSize: { [size in FontSizes]: string };
export const fontType: { [type in FontTypes]: { 'font-size': string; 'font-wight': string } };
