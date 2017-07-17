import React from 'react';
import { pure } from 'recompose';

import './Header.scss';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo"/>
        </div>
    );
};

export default pure(Header);