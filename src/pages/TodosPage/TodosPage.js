import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import LinearProgress from 'material-ui/LinearProgress';

import Tree from '../../components/Tree';
import Filter from '../../components/Filter';
import InputWithButton from '../../components/InputWithButton';
import TodoList from './components/TodoList';
import TodosTreeItem from './components/TodosTreeItem';

import './TodosPage.scss';

const data = [
    {
        id: 1,
        title: 'Task 1',
        isDone: true,
        description: '11111111111111'
    },
    {
        id: 2,
        title: 'Task 2',
        isDone: false,
        description: '11111111111111'
    },
    {
        id: 3,
        title: 'Task 3',
        isDone: false,
        description: '11111111111111'
    }
];

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
class TodosPage extends Component {
    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.btnLabel = formatMessage({ id: 'common.button.add' });
        this.enterCategoryTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterCategoryTitleHint' });
        this.enterTaskTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterTaskTitleHint' });
    }

    render() {
        return (
            <div className="todos-page">
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
                <div className="tree-container">
                    <div className="tree">
                        <Tree data={treeData} component={TodosTreeItem} />
                    </div>
                    <div className="tree-content">
                        <TodoList list={data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodosPage;