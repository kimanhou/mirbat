import React from 'react';
import './NavIcon.scss';

interface INavIconProps {
    isNavVisible : boolean;
    setIsNavVisible : (isNavVisible : boolean) => void;
    iswhite ?: boolean;
}

const NavIcon : React.FC<INavIconProps> = props => {
    const checkedClassName = props.isNavVisible ? 'checked' : '';
    const isWhiteClassName = props.iswhite ? 'white' : '';

    return (
        <div className={`nav-icon flex-column ${checkedClassName} ${isWhiteClassName}`} onClick={t => props.setIsNavVisible(!props.isNavVisible)}>
            <span className={`span-one`}></span>
            <span className={`span-two`}></span>
            <span className={`span-three`}></span>
        </div>
    )
}

export default NavIcon;