import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import LinearProgress from 'material-ui/LinearProgress';

import Tree from '../../components/Tree';
import Filter from '../../components/Filter';
import InputWithButton from '../../components/InputWithButton';
import TodoList from './components/TodoList';
import TodosTreeItem from './components/TodosTreeItem';
import { categoriesTreeActions } from '../../state/categoriesTree';

import './TodosPage.scss';

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
        const { categoriesTree, todos } = this.props;

        return (
            <div className="todos-page">
                <Filter className='filter-block'></Filter>
                <LinearProgress mode="determinate" value={30} max={100} />
                <div className="action-panel">
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterCategoryTitleHint} />
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterTaskTitleHint} />
                </div>
                <div className="tree-container">
                    <div className="tree">
                        <Tree data={categoriesTree} component={TodosTreeItem} />
                    </div>
                    <div className="tree-content">
                        <TodoList list={todos} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categoriesTree: state.categoriesTree,
        todos: state.todos['1']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        categoriesActions: bindActionCreators(categoriesTreeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);