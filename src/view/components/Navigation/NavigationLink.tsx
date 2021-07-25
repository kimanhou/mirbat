import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../../model/Text';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : Text;
    to : string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    var localisation = useContext(LocalValueContext);

    return (
        <Link className={`navigation-link`} to={props.to} >
            {props.text.getText(localisation)}
        </Link>
    );
}

export default NavigationLink;