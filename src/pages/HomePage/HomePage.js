import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import LinearProgress from 'material-ui/LinearProgress';

import Tree from '../../components/Tree';
import Filter from '../../components/Filter';
import InputWithButton from '../../components/InputWithButton';

import logo from '../../logo.svg';
import './HomePage.scss';

const treeData = [
    {
        id: 1,
        categoryName: "11111",
        isExpanded: true,
        children: [
            {
                id: 11,
                categoryName: "11111",
                isExpanded: false,
                children: []
            },
            {
                id: 12,
                categoryName: "11111",
                isExpanded: false,
                children: []
            }
        ]
    },
    {
        id: 2,
        categoryName: "22222",
        isExpanded: false,
        children: []
    }
];

@injectIntl
class HomePage extends Component {
    render() {
        const { children, intl: { formatMessage } } = this.props;
        const btnLabel = formatMessage({ id: 'common.button.add' });

        return (
            <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
                </div>
                <div className="home-page">
                    <Filter></Filter>
                    <LinearProgress mode="determinate" value={30} max={100} />
                    <div className="action-panel">
                        <InputWithButton btnLabel={btnLabel} />
                        <InputWithButton btnLabel={btnLabel} />
                    </div>
                    <div className="container">
                        <div className="tree">
                            <Tree data={treeData}></Tree>
                        </div>
                        <div className="content">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;