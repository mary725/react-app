import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './context/store';
import * as locales from './locales';
import Layout from './pages/Layout';

import './App.scss';

class App extends Component {
    render() {
        const messages = locales['en'];

        return (
            <IntlProvider locale={'en'} messages={messages}>
                <MuiThemeProvider>
                    <Provider store={store}>
                        <Layout />
                    </Provider>
                </MuiThemeProvider>
            </IntlProvider>
        );
    }
}

export default App;
