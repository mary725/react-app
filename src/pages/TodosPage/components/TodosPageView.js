import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import _ from 'lodash';

import CategoryTree from '../../../components/CategoryTree';
import Filter from '../../../components/Filter';
import InputWithButton from '../../../components/InputWithButton';
import TodosProgressBar from '../../../components/TodosProgressBar';
import TodoList from './TodoList';

import '../TodosPage.scss';

@injectIntl
class TodosPageView extends Component {
    static propTypes = {
        todos: PropTypes.array,
        addCategory: PropTypes.func,
        addTodo: PropTypes.func,
        intl: intlShape
    };

    static defaultProps = {
        todos: []
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.pageTitle = formatMessage({ id: 'todosPage.pageTitle' });
        this.noDataMessage = formatMessage({ id: 'todosPage.todos.noDataMessage' });
        this.btnLabel = formatMessage({ id: 'common.button.add' });
        this.enterCategoryTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterCategoryTitleHint' });
        this.enterTaskTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterTaskTitleHint' });
    }

    render() {
        const { todos, onAddCategory, onAddTodo, match: { params: { categoryId } } } = this.props;
        const paramCategoryId = _.isNil(categoryId) ? null : _.toNumber(categoryId);

        return (
            <div className="todos-page">
                <div className="page-header">
                    <h1>{this.pageTitle}</h1>
                    <Filter className='filter-block'></Filter>
                </div>
                <TodosProgressBar />
                <div className="action-panel">
                    <InputWithButton
                        btnLabel={this.btnLabel}
                        hint={this.enterCategoryTitleHint}
                        onHandleBtnClick={onAddCategory}/>
                    { _.isNumber(paramCategoryId) && (
                        <InputWithButton
                            btnLabel={this.btnLabel}
                            hint={this.enterTaskTitleHint}
                            onHandleBtnClick={onAddTodo}/>
                    )}
                </div>
                <div className="page-content">
                    <div className="tree">
                        <CategoryTree/>
                    </div>
                    { _.isNumber(paramCategoryId) && (
                        <div className="todos-list">
                            { todos.length
                                ? (<TodoList
                                    {...this.props}/>)
                                : (<div>
                                    {this.noDataMessage}
                                </div>)}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default TodosPageView;