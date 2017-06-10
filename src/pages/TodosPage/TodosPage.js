import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
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
import { todosActions } from '../../state/todos';

import './TodosPage.scss';

@injectIntl
@autobind
class TodosPage extends Component {
    static propTypes = {
        categoriesActions: PropTypes.shape({ // todo
            addCategory: PropTypes.func.isRequired,
            deleteCategory: PropTypes.func.isRequired,
            editCategory: PropTypes.func.isRequired
        })
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.btnLabel = formatMessage({ id: 'common.button.add' });
        this.enterCategoryTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterCategoryTitleHint' });
        this.enterTaskTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterTaskTitleHint' });
    }

    render() {
        const { categoriesTree, todos, categoriesActions } = this.props;

        return (
            <div className="todos-page">
                <Filter className='filter-block'></Filter>
                <LinearProgress mode="determinate" value={30} max={100} />
                <div className="action-panel">
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterCategoryTitleHint}
                        onHandleBtnClick={categoriesActions.addCategory}/>
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterTaskTitleHint}
                        onHandleBtnClick={() => {}}/>
                </div>
                <div className="tree-container">
                    <div className="tree">
                        <Tree
                            data={categoriesTree}
                            itemComponent={TodosTreeItem}
                            additionalData={{todosActions, categoriesActions}} />
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
        categoriesActions: bindActionCreators(categoriesTreeActions, dispatch),
        todosActions: bindActionCreators(todosActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);