import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as locales from './locales';
import Layout from './pages/Layout';

import './App.scss';

class App extends Component {
    render() {
        const messages = locales['en'];

        return (
            <IntlProvider locale={'en'} messages={messages}>
                <MuiThemeProvider>
                    <div>
                        <Layout />
                    </div>
                </MuiThemeProvider>
            </IntlProvider>
        );
    }
}

export default App;
