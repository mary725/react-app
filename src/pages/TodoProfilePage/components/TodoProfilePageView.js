import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { mapProps } from 'recompose';
import _ from 'lodash';

import Profile from './Profile';
import CategoryTree from '../../../components/CategoryTree';

import '../TodoProfilePage.scss';

@injectIntl
@mapProps(props => ({
    ...props,
    title: _.get(props, 'data.title')
}))
class TodoProfilePageView extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    render() {
        const { title } = this.props;

        return (
            <div className="todo-profile-page">
                <div>
                    <h1>{title}</h1>
                </div>
                <div className="todo-profile-page-content">
                    <div className="tree">
                        <CategoryTree isProfileMode/>
                    </div>
                    <Profile {...this.props}/>
                </div>
            </div>
        );
    }
}

export default TodoProfilePageView;