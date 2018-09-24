import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import GitDemon from './containers/GitDemon';
import store from './redux/store';

import _ from './index.css';

render(
  <Provider store={store}>
    <GitDemon />
  </Provider>,
  document.getElementById('gitdemonapp')
);
