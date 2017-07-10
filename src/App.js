import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withContext } from 'recompose';

import store from './context/store';
import * as locales from './locales';
import RootModal from './components/Modal/RootModal';
import { modals } from './components/Modal';
import Loader from './components/Loader';
import Layout from './pages/Layout';

import './App.scss';

@withContext(
    {
        modals: PropTypes.object
    },
    () => ({ modals })
)
class App extends Component {
    render() {
        const messages = locales['en'];

        return (
            <div className="app">
                <IntlProvider locale={'en'} messages={messages}>
                    <MuiThemeProvider>
                        <Provider store={store}>
                            <div>
                                <Layout />
                                <RootModal />
                                <Loader />
                            </div>
                        </Provider>
                    </MuiThemeProvider>
                </IntlProvider>
            </div>
        );
    }
}

export default App;
