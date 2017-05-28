import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import cn from 'classnames';
//import { mapProps } from 'recompose';
import HardwareKeyboardArrowRight from 'react-material-icons/icons/hardware/keyboard-arrow-right';
import HardwareKeyboardArrowDown from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import _ from 'lodash';

import './Tree.scss';
/*
 @mapProps(props => {
 const data = _.isArray(props.data) ? { children: props.data } : props.data;

 return {
 ...data,
 showOnlyList: _.isArray(props.data)
 };
 })
 */
@autobind
class TreeItem extends Component {
    static propTypes = {
        data: PropTypes.any,
        component: PropTypes.func
    };

    constructor(props) {
        super(props);

        const data = _.isArray(props.data) ? { children: _.cloneDeep(props.data) } : _.cloneDeep(props.data);

        this.state = _.assign({}, data, { showOnlyList: !data.id });
    };

    onExpand() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    addChildren() {
        let children = _.cloneDeep(this.state.children);
        children.push({
            id: new Date().valueOf(),
            categoryName: "3333",
            isExpanded: false,
            children: []
        });
        this.setState({ children });
    }

    render() {
        const { name, children = [], isExpanded, showOnlyList } = this.state;
        const Component = this.props.component;
        const expandIcon = isExpanded
            ? <HardwareKeyboardArrowDown onClick={this.onExpand} className="icon icon-arrow"/>
            : <HardwareKeyboardArrowRight onClick={this.onExpand} className="icon icon-arrow"/>;
        const listClasses = cn('items-list', { 'nested-list': !showOnlyList });

        return (
            <div className="tree-item">
                <div className="item-wrapper">
                    {
                        children.length > 0 &&
                            !showOnlyList &&
                            expandIcon
                    }
                    { !showOnlyList &&
                        (
                            <div className="item">
                                {
                                    Component
                                        ? <Component {...this.state} />
                                        : <span>{name}</span>
                                }
                            </div>
                        )
                    }
                </div>
                { 
                    ( isExpanded || showOnlyList ) &&
                        <div className={listClasses}>
                            { children.map((item, index) => (
                                <TreeItem key={item.id.toString()} data={item} component={Component}></TreeItem>
                            )) }
                        </div>
                }
            </div>
        );
    }
}

export default TreeItem;