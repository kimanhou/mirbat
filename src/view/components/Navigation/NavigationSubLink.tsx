import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationSubLink.scss';

interface INavigationSubLinkProps {
    to : string;
    text : string;
}

const NavigationSubLink : React.FC<INavigationSubLinkProps> = props => {
    return (
        <Link className={`navigation-sub-link`} to={props.to} >
            {props.text}
        </Link>
    );
}

export default NavigationSubLink;