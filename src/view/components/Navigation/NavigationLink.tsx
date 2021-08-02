import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : string;
    to : string;
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
    transitionDelay ?: string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    const visibleClassName = props.isVisible ? 'visible' : '';

    const thickTransition = `transform .2s cubic-bezier(1,.07,1,.9), width 1s ${props.transitionDelay} cubic-bezier(1,.07,1,.9)`;

    return (
        <HashLink className={`navigation-link ${visibleClassName}`} to={props.to} onClick={() => props.setIsVisible(false)}>
            {props.text}
            <div className={`underlines`}>
                <div className={`thin-underline`} style={{ transitionDelay: props.transitionDelay }}></div>
                <div className={`thick-underline`} style={{ transition: thickTransition }}></div>
            </div>
        </HashLink>
    );
}

export default NavigationLink;