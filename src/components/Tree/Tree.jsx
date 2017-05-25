import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { mapProps } from 'recompose';
import EditorModeEdit from 'react-material-icons/icons/editor/mode-edit';
import HardwareKeyboardArrowRight from 'react-material-icons/icons/hardware/keyboard-arrow-right';
import HardwareKeyboardArrowDown from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import ContentAddCircleOutline from 'react-material-icons/icons/content/add-circle-outline';
import ContentClear from 'react-material-icons/icons/content/clear';
import _ from 'lodash';

import './Tree.scss';

/*@mapProps(props => {
    const data = _.isArray(props.data) ? { children: props.data } : props.data;

    return {
        ...data,
        showOnlyList: !data.id
    };
})*/
@autobind
class TreeItem extends Component {
   constructor(props) {
      super(props);
/*
      const data = _.isArray(props.data) ? { children: _.cloneDeep(props.data) } : _.cloneDeep(props.data);

      this.state = _.assign({}, props.data, { showOnlyList: !data.id });*/
      const data = _.isArray(props.data) ? { children: _.cloneDeep(props.data) } : _.cloneDeep(props.data);

      this.state = _.assign({}, data, { showOnlyList: !data.id });
   };

    onExpand() {
        this.setState({ isExpanded: this.state.isExpanded });
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
    const { categoryName, children = [], isExpanded, showOnlyList } = this.state;
    const expandIcon = isExpanded
                        ? <HardwareKeyboardArrowDown onClick={this.onExpand} className="icon" />
                        : <HardwareKeyboardArrowRight onClick={this.onExpand} className="icon" />;

      return (
            <div className="tree-item">
                <div className="item-wrapper">
                    { children.length > 0 && !showOnlyList &&
                        expandIcon }
                    { !showOnlyList && (
                    <div className="item">
                        <div className="item-name">
                            <span>{categoryName}</span>
                            <EditorModeEdit className="icon" />
                        </div>
                        <div className="item-actions">
                            <ContentClear className="icon"/>
                            <ContentAddCircleOutline onClick={this.addChildren} className="icon" />
                        </div>
                    </div>) }
                </div>
                { ( isExpanded || showOnlyList ) &&
                    <div className="items-list">
                        { children.map((item, index) => (
                            <TreeItem key={item.id.toString()} data={item}></TreeItem>
                            )) }
                    </div>}
             </div>
      );
   }
}

export default TreeItem;