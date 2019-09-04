import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';

import { ThemeProvider, theme } from './theme'

import { Hello } from 'components/Hello';
import { Button } from 'components/atoms/Button';
import Enthusiasm from 'components/Enthusiasm/container';
import { EnthusiasmAction } from './actions';

const store = createStore<StoreState, EnthusiasmAction, {}, {}>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        <Hello compiler="TypeScript" framework="React"/>
        <Button text="hello world" />
        <Enthusiasm />
      </div>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
