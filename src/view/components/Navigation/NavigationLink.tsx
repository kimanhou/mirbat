import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../../model/Text';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : Text;
    to : string;
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
    transitionDelay ?: string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    var localisation = useContext(LocalValueContext);
    const visibleClassName = props.isVisible ? 'visible' : '';

    const thickTransition = `transform .2s cubic-bezier(1,.07,1,.9), width 1s ${props.transitionDelay} cubic-bezier(1,.07,1,.9)`;

    return (
        <Link className={`navigation-link ${visibleClassName}`} to={props.to} >
            {props.text.getText(localisation)}
            <div className={`underlines`}>
                <div className={`thin-underline`} style={{ transitionDelay: props.transitionDelay }}></div>
                <div className={`thick-underline`} style={{ transition: thickTransition }}></div>
            </div>
        </Link>
    );
}

export default NavigationLink;