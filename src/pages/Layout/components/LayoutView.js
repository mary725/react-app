import React, { Component } from 'react';

import Header from '../../../components/Header';
import { route } from '../../../App.route';

import '../Layout.scss';

class LayoutView extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="content">
                    { route }
                </div>
            </div>
        );
    }
}

export default LayoutView;
