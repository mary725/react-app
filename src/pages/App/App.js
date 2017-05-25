import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as locales from '../../locales';

class App extends Component {
  render() {
    const { children } = this.props;
    const messages = locales['en'];

    return (
      <IntlProvider locale={'en'} messages={messages}>
        <MuiThemeProvider>
          <div>
            { children }
          </div>
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;
