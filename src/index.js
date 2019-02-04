import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin(); // remove material-ui warnings

import { initialize } from './mocks';

if(process.env.__MOCKS__) {
  initialize();
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
