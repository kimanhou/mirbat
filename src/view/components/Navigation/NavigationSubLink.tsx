import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { ProjectCategory } from '../../../model/Project';
import './NavigationSubLink.scss';

interface INavigationSubLinkProps {
    to : string;
    text : string;
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
    activeCategory ?: ProjectCategory;
    setActiveCategory ?: (activeCategory : ProjectCategory) => void;
}

const NavigationSubLink : React.FC<INavigationSubLinkProps> = props => {
    const onClick = () => {
        props.setIsVisible(false);
        if (props.activeCategory !== undefined && props.setActiveCategory !== undefined) {
            props.setActiveCategory(props.activeCategory);
        }
    }

    return (
        <HashLink className={`navigation-sub-link`} to={props.to} onClick={onClick}>
            {props.text}
        </HashLink>
    );
}

export default NavigationSubLink;