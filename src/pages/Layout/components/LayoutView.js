import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { injectIntl } from 'react-intl';

import Tree from '../../../components/Tree';
import Filter from '../../../components/Filter/index';
import InputWithButton from '../../../components/InputWithButton/index';
import TodosTreeItem from '../../TodosPage/components/TodosTreeItem/index';
import TodosProgressBar from '../../../components/TodosProgressBar/index';
import Header from '../../../components/Header/index';
import { pageRoutes } from '../../../App.route';

import '../Layout.scss';

@injectIntl
@autobind
class LayoutView extends Component {
    static propTypes = {
        addCategory: PropTypes.func
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

    render() {
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
                            onHandleBtnClick={() => {}}/>
                    </div>
                    <div className="tree-container">
                        <div className="tree">
                            <Tree itemComponent={TodosTreeItem}/>
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
