import React from 'react';
import Text from '../../../model/Text';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {}

const Navigation : React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation`}>
            <NavigationLink text={new Text('Notre entreprise', 'Notre entreprise')} to='/entreprise' />
            <NavigationLink text={new Text('Nos projets', 'Nos projets')} to='/projets' />
            <NavigationLink text={new Text('Nous contacter', 'Nous contacter')} to='/contact' />
        </div>
    );
}

export default Navigation;