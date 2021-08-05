import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import BackgroundOnHover from './BackgroundOnHover';
import './LinkWithBackground.scss';

interface ILinkWithBackgroundProps {
    to : string;
    className ?: string;
    launchPageTransition : () => void;
    setActiveCategoryToAll ?: () => void;
}

const LinkWithBackground : React.FC<ILinkWithBackgroundProps> = props => {
    const className = props.className !== undefined ? props.className : '';
    const history = useHistory();

    const onClick : React.MouseEventHandler<HTMLAnchorElement> = e => {
        e.preventDefault();
        setTimeout(() => history.push(props.to), 1000);
        if (props.launchPageTransition !== undefined) {
            props.launchPageTransition();
        }
        if (props.setActiveCategoryToAll !== undefined) {
            props.setActiveCategoryToAll();
        }
    }

    return (
        <Link className={`link-with-background ${className}`} to={props.to} onClick={onClick}>
            {props.children}
            <BackgroundOnHover className={`link-with-background-background`}/>
        </Link>
    );
}

export default LinkWithBackground;