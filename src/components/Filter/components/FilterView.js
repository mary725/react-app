import React, { Component } from 'react';
import { pure } from 'recompose';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import autobind from 'autobind-decorator';
import cn from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import ContentClear from 'react-material-icons/icons/content/clear';
import _ from 'lodash';

import '../Filter.scss';

@injectIntl
@autobind
class FilterView extends Component {
    static propTypes = {
        params: PropTypes.shape({
            isDone: PropTypes.bool,
            searchString: PropTypes.string
        }),
        changeFilterParams: PropTypes.func.isRequired
    };

    static defaultProps = {
        params: {}
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.showDoneMessage = formatMessage({ id: 'todosPage.filter.showDone' });
        this.searchHint = formatMessage({ id: 'todosPage.filter.searchHint' });
    }

    initValue(textField) {
        const { params: { searchString = '' } } = this.props;

        this.textField = textField;
        if (this.textField) {
            this.textField.value = searchString;
        }
    }

    clearSearchString() {
        const { changeFilterParams } = this.props;

        this.textField.value = '';
        changeFilterParams({ searchString: '' });
    }

    changeIsDoneStatus(event, isChecked) {
        const { changeFilterParams } = this.props;

        changeFilterParams({ isDone: isChecked });
    }

    onChangeSearchString() {
        const { changeFilterParams } = this.props;
        const searchString = this.textField.value;

        changeFilterParams({ searchString });
    }

    onChangeSearchStringDebounce = _.debounce(this.onChangeSearchString, 500)

    render() {
        const { params: { isDone = false }, className } = this.props;
        const classes = cn('filter', className);

        return (
            <div className={classes}>
                <Checkbox
                    label={this.showDoneMessage}
                    className='show-done-chb'
                    checked={isDone}
                    onCheck={this.changeIsDoneStatus}/>
                <div className='search-block'>
                    <input
                        className='search-input'
                        placeholder={this.searchHint}
                        ref={this.initValue}
                        onKeyUp={this.onChangeSearchStringDebounce}/>
                    <ContentClear
                        className='icon'
                        onClick={this.clearSearchString}/>
                </div>
            </div>
        );
    }
}

export default pure(FilterView);