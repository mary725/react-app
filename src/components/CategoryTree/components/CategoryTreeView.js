import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { injectIntl, intlShape } from 'react-intl';

import TreeNode from '../../TreeNode';

import '../CategoryTree.scss';

@injectIntl
@autobind
class CategoryTreeView extends Component {
    static propTypes = {
        rootCategoryIds: PropTypes.array,
        itemComponent: PropTypes.func,
        getDataById: PropTypes.func,
        intl: intlShape
    };

    static defaultProps = {
        rootCategoryIds: []
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.noDataMessage = formatMessage({ id: 'categories.noDataMessage' });
    }

    render() {
        const { rootCategoryIds, itemComponent, getDataById } = this.props;

        return (
            <div className='category-tree'>
                { rootCategoryIds.length
                    ? rootCategoryIds.map((id) => (
                        <TreeNode
                            key={id.toString()}
                            id={id}
                            itemComponent={itemComponent}
                            getDataById={getDataById}/>
                        ))
                    : (<div>
                        {this.noDataMessage}
                    </div>)}
            </div>
        );
    }
}

export default CategoryTreeView;