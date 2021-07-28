import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavigationSubLink.scss';

interface INavigationSubLinkProps {
    to : string;
    text : string;
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
}

const NavigationSubLink : React.FC<INavigationSubLinkProps> = props => {
    return (
        <HashLink className={`navigation-sub-link`} to={props.to} onClick={() => props.setIsVisible(false)}>
            {props.text}
        </HashLink>
    );
}

export default NavigationSubLink;