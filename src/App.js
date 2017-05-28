import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as locales from './locales';
import appRoutes from './App.route';

import './App.scss';

class App extends Component {
    render() {
        const messages = locales['en'];

        return (
            <IntlProvider locale={'en'} messages={messages}>
                <MuiThemeProvider>
                    <div>
                        <Router>
                            {appRoutes}
                        </Router>
                    </div>
                </MuiThemeProvider>
            </IntlProvider>
        );
    }
}

export default App;
