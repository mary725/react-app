import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { injectIntl } from 'react-intl';
import _ from 'lodash';

import Tree from '../../../components/Tree';
import Filter from '../../../components/Filter';
import InputWithButton from '../../../components/InputWithButton';
import TodosTreeItem from './TodosTreeItem';
import TodoProfileTreeItem from './TodoProfileTreeItem';
import TodosProgressBar from '../../../components/TodosProgressBar';
import Header from '../../../components/Header';
import { pageRoutes } from '../../../App.route';

import '../Layout.scss';

@injectIntl
@autobind
class LayoutView extends Component {
    static propTypes = {
        addCategory: PropTypes.func,
        addTodo: PropTypes.func
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.btnLabel = formatMessage({ id: 'common.button.add' });
        this.enterCategoryTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterCategoryTitleHint' });
        this.enterTaskTitleHint = formatMessage({ id: 'todosPage.actionPanel.enterTaskTitleHint' });
    }

    onAddCategory(categoryName) {
        const { addCategory } = this.props;

        if (categoryName) {
            addCategory && addCategory(categoryName);
        }
    }

    onAddTodo(title) {
        const { addTodo } = this.props;

        if (title) {
            addTodo && addTodo(title);
        }
    }

    render() {
        const { location: { pathname }} = this.props;
        const isProfileMode = _.includes(pathname, 'todoProfile');
        const TreeItemComponent = isProfileMode
                                    ? TodoProfileTreeItem
                                    : TodosTreeItem;

        return (
            <div className="layout">
                <Header />
                <div className="content">
                    <Filter className='filter-block'></Filter>
                    <TodosProgressBar />
                    <div className="action-panel">
                        <InputWithButton
                            btnLabel={this.btnLabel}
                            hint={this.enterCategoryTitleHint}
                            onHandleBtnClick={this.onAddCategory}/>
                        <InputWithButton
                            btnLabel={this.btnLabel}
                            hint={this.enterTaskTitleHint}
                            onHandleBtnClick={this.onAddTodo}/>
                    </div>
                    <div className="tree-container">
                        <div className="tree">
                            <Tree itemComponent={TreeItemComponent}/>
                        </div>
                        <div className="page-content">
                            { pageRoutes }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LayoutView;
