import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider, theme } from './theme'

import { Hello } from 'components/Hello';
import { Button } from 'components/atoms/Button';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>
      <Hello compiler="TypeScript" framework="React"/>
      <Button text="hello world" />
    </div>
  </ThemeProvider>,
  document.getElementById('root'),
);
