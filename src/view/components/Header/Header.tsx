import React from 'react';
import './Header.scss';
import Name from './Name';
import NavIcon from './NavIcon';

interface IHeaderProps {
    isNavVisible : boolean;
    setIsNavVisible : (isNavVisible : boolean) => void;
    launchPageTransition : () => void;
    iswhite ?: boolean;
    className ?: string;
}

const Header : React.FC<IHeaderProps> = props => {
    const className = props.className != null ? props.className : "";
    const isWhiteClassName = props.iswhite ? 'white' : '';
    const isTransparentClassName = props.iswhite === true && props.isNavVisible ? "transparent" : "";

    return (
        <div className={`header flex-row ${isWhiteClassName} ${isTransparentClassName} ${className}`}>
            <NavIcon isNavVisible={props.isNavVisible} setIsNavVisible={props.setIsNavVisible} iswhite={props.iswhite}/>
            <Name isNavVisible={props.isNavVisible} iswhite={props.iswhite} launchPageTransition={props.launchPageTransition}/>
        </div>
    );
}

export default Header;