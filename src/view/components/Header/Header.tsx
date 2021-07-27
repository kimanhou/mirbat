import React, { useEffect, useState } from 'react';
import './Header.scss';
import Name from './Name';
import NavIcon from './NavIcon';

interface IHeaderProps {
    isNavVisible : boolean;
    setIsNavVisible : (isNavVisible : boolean) => void;
    iswhite ?: boolean;
}

const Header : React.FC<IHeaderProps> = props => {
    const isWhiteClassName = props.iswhite ? 'white' : '';
    const isTransparentClassName = props.iswhite === true && props.isNavVisible ? "transparent" : "";

    return (
        <div className={`header flex-row ${isWhiteClassName} ${isTransparentClassName}`}>
            <NavIcon isNavVisible={props.isNavVisible} setIsNavVisible={props.setIsNavVisible} iswhite={props.iswhite}/>
            <Name isNavVisible={props.isNavVisible} iswhite={props.iswhite} />
        </div>
    );
}

export default Header;