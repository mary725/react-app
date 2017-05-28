import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import LinearProgress from 'material-ui/LinearProgress';

import Tree from '../../components/Tree';
import Filter from '../../components/Filter';
import InputWithButton from '../../components/InputWithButton';

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
    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.btnLabel = formatMessage({ id: 'common.button.add' });
        this.enterCategoryTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterCategoryTitleHint' });
        this.enterTaskTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterTaskTitleHint' });
    }

    render() {
        const { children } = this.props;

        return (
            <div className="home-page">
                <Filter className='filter-block'></Filter>
                <LinearProgress mode="determinate" value={30} max={100}/>
                <div className="action-panel">
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterCategoryTitleHint}/>
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterTaskTitleHint}/>
                </div>
                <div className="page-container">
                    <div className="tree">
                        <Tree data={treeData}></Tree>
                    </div>
                    <div className="content">
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;