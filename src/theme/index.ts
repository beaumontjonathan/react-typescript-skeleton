import * as styledComponents from 'styled-components';
import { HTMLProps } from 'react';
import { ITheme } from 'theme/ITheme';
import { theme } from 'theme/theme';

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, ITheme>;

function styledWithProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<HTMLProps<U>>,
): StyledFunction<T & HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ITheme
>;

export default styled;
export { css, injectGlobal, keyframes, theme, ThemeProvider, styledWithProps }
