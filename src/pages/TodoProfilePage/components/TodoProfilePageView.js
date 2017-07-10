import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import Profile from './Profile';
import CategoryTree from '../../../components/CategoryTree';

import '../TodoProfilePage.scss';

@injectIntl
class TodoProfilePageView extends Component {
    render() {
        return (
            <div className="todo-profile-page">
                <div className="tree">
                    <CategoryTree isProfileMode/>
                </div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

export default TodoProfilePageView;