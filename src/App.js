import React, { Component } from 'react';
import { Router } from 'react-router';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createHashHistory } from 'history';

import * as locales from './locales';

import appRoutes from './App.route';

const history = createHashHistory();

class App extends Component {
  render() {
    const messages = locales['en'];

    return (
      <IntlProvider locale={'en'} messages={messages}>
        <MuiThemeProvider>
          <div>
              <Router history={history}>
                  {appRoutes}
              </Router>
          </div>
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;
