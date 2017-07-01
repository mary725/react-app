import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import HardwareKeyboardArrowRight from 'react-material-icons/icons/hardware/keyboard-arrow-right';
import HardwareKeyboardArrowDown from 'react-material-icons/icons/hardware/keyboard-arrow-down';

import CategoryTreeNode from '../Tree/components/CategoryTreeNode';

import './TreeNode.scss';

@autobind
class TreeNode extends Component {
	static propTypes = {
		data: PropTypes.shape({
			name: PropTypes.string,
			childrenList: PropTypes.array
		}),
		itemComponent: PropTypes.func,
        customTreeNode: PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	onExpand() {
		this.setState({ isExpanded: !this.state.isExpanded });
	}

	render() {
		const { data: { name, childrenList = [] } = {}, itemComponent, customTreeNode = CategoryTreeNode } = this.props;
		const isExpanded = this.state.isExpanded;
		const Component = itemComponent;
		const TreeNodeComponent = customTreeNode ? customTreeNode : TreeNode;
		const expandIcon = isExpanded
			? <HardwareKeyboardArrowDown onClick={this.onExpand} className="icon icon-arrow"/>
			: <HardwareKeyboardArrowRight onClick={this.onExpand} className="icon icon-arrow"/>;
		const children = childrenList.map((id) => (
			<TreeNodeComponent
				key={id && id.toString()}
				id={id}
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

export default TreeNode;