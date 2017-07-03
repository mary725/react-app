import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import HardwareKeyboardArrowRight from 'react-material-icons/icons/hardware/keyboard-arrow-right';
import HardwareKeyboardArrowDown from 'react-material-icons/icons/hardware/keyboard-arrow-down';

import TreeNode from '../TreeNode';

import '../TreeNode.scss';

@autobind
class TreeNodeView extends Component {
	static propTypes = {
		data: PropTypes.shape({
			name: PropTypes.string,
			childrenList: PropTypes.array
		}),
		itemComponent: PropTypes.func,
        customTreeNode: PropTypes.func,
		onExpand: PropTypes.func,
        isExpanded: PropTypes.bool,
        getDataById: PropTypes.func
	};

	render() {
		const { data: { name, childrenList = [] } = {}, itemComponent, onExpand, isExpanded, getDataById } = this.props;
		const Component = itemComponent;
		const expandIcon = isExpanded
			? <HardwareKeyboardArrowDown onClick={onExpand} className="icon icon-arrow"/>
			: <HardwareKeyboardArrowRight onClick={onExpand} className="icon icon-arrow"/>;
		const children = childrenList.map((id) => (
			<TreeNode
				key={id && id.toString()}
				id={id}
				getDataById={getDataById}
				itemComponent={Component} />
		));

		return (
			<div className="tree-node">
				<div className="item-wrapper">
					{ childrenList.length > 0 &&
							expandIcon }
					<div className="item">
						{ Component
							? <Component {...this.props} />
							: <span>{name}</span> }
					</div>
				</div>
				{ isExpanded &&
					(<div className='items-list'>
						{children}
					</div>) }
			</div>
		);
	}
}

export default TreeNodeView;