import React from 'react';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
            MirBat
        </div>
    );
}

export default Header;