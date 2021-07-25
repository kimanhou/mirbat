import React from 'react';
import './Header.scss';
import NavIcon from './NavIcon';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header flex-row`}>
            <NavIcon />
            <div className={`header-name`}>
                MirBat
            </div>
        </div>
    );
}

export default Header;