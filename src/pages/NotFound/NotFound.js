import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import './NotFound.scss';

@injectIntl
class NotFound extends Component {
    constructor(props) {
        super(props);

        const { intl: { formatMessage } } = props;

        this.message = formatMessage({ id: 'common.notFoundMessage' });
    }

    render() {
        return (
            <div className="not-found">
                <span>{this.message}</span>
            </div>
        );
    }
}

export default NotFound;