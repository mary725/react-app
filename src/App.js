import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withContext } from 'recompose';

import store from './context/store';
import * as locales from './locales';
import { rootRoute } from './App.route';
import RootModal from './components/Modal/RootModal';
import { modals } from './components/Modal';

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
            <IntlProvider locale={'en'} messages={messages}>
                <MuiThemeProvider>
                    <Provider store={store}>
                        <div>
                            { rootRoute }
                            <RootModal />
                        </div>
                    </Provider>
                </MuiThemeProvider>
            </IntlProvider>
        );
    }
}

export default App;
