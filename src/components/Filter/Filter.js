import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import cn from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import ContentClear from 'react-material-icons/icons/content/clear';

import './Filter.scss';

@injectIntl
class Filter extends Component {
    static propTypes = {
        className: PropTypes.string,
        onChangeCheckboxValue: PropTypes.func,
        onSearch: PropTypes.func
    };

    constructor(props) {
        super(props);

        const formatMessage = props.intl.formatMessage;

        this.showDoneMessage = formatMessage({ id: 'todosPage.filter.showDone' });
        this.searchHint = formatMessage({ id: 'todosPage.filter.searchHint' });
        this.state = {};
    }

    render() {
        const { className } = this.props;
        const classes = cn('filter', className);

        return (
            <div className={classes}>
                <Checkbox
                    label={this.showDoneMessage}
                    className='show-done-chb' />
                <div className='search-block'>
                    <input className='search-input'
                        placeholder={this.searchHint}/>
                    <ContentClear className='icon' />
                </div>
            </div>
        );
    }
}

export default Filter;