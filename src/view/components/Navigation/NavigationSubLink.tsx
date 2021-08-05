import React from 'react';
import { useHistory } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { ProjectCategory } from '../../../model/Project';
import { scrollToAnchor } from '../../componentUtil';
import './NavigationSubLink.scss';

interface INavigationSubLinkProps {
    to : string;
    text : string;
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
    launchPageTransition : () => void;
    activeCategory ?: ProjectCategory;
    setActiveCategory ?: (activeCategory : ProjectCategory) => void;
    scrollToAnchor ?: string;
}

const NavigationSubLink : React.FC<INavigationSubLinkProps> = props => {
    const history = useHistory();
    const onClick : React.MouseEventHandler<HTMLAnchorElement> = e => {
        e.preventDefault();
        setTimeout(() => history.push(props.to), 1000);
        props.setIsVisible(false);
        if (props.to !== window.location.pathname) {
            props.launchPageTransition();
        }
        if (props.activeCategory !== undefined && props.setActiveCategory !== undefined) {
            props.setActiveCategory(props.activeCategory);
        }
        if (props.scrollToAnchor !== undefined && props.scrollToAnchor !== '') {
            const temp = props.scrollToAnchor;
            setTimeout(() => scrollToAnchor(temp), 1200);
        }
    }

    return (
        <HashLink className={`navigation-sub-link`} to={props.to} onClick={onClick}>
            {props.text}
        </HashLink>
    );
}

export default NavigationSubLink;