import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundOnHover from './BackgroundOnHover';
import './LinkWithBackground.scss';

interface ILinkWithBackgroundProps {
    to : string;
    className ?: string;
}

const LinkWithBackground : React.FC<ILinkWithBackgroundProps> = props => {
    const className = props.className !== undefined ? props.className : '';
    return (
        <Link className={`link-with-background ${className}`} to={props.to} >
            {props.children}
            <BackgroundOnHover className={`link-with-background-background`}/>
        </Link>
    );
}

export default LinkWithBackground;