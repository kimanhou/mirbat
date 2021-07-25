import React, { useState } from 'react';
import './NavIcon.scss';

interface INavIconProps {}

const NavIcon : React.FC<INavIconProps> = props => {
    const [ checked, setChecked ] = useState(false);
    const checkedClassName = checked ? 'checked' : '';

    return (
        <div className={`nav-icon flex-column ${checkedClassName}`} onClick={x => setChecked(t => !t)}>
            <span className={`span-one`}></span>
            <span className={`span-two`}></span>
            <span className={`span-three`}></span>
        </div>
    )
}

export default NavIcon;