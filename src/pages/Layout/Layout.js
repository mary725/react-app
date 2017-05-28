import React, { Component } from 'react';

import Header from '../../components/Header';
import appRoutes from '../../App.route';

import './Layout.scss';

class Layout extends Component {
  render() {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                { appRoutes }
            </div>
        </div>
    );
  }
}

export default Layout;
