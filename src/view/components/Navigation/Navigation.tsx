import React from 'react';
import Text from '../../../model/Text';
import './Navigation.scss';
import NavigationLink from './NavigationLink';
import NavigationSubLink from './NavigationSubLink';

interface INavigationProps {
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
}

const Navigation : React.FC<INavigationProps> = props => {
    const visibleClassName = props.isVisible ? 'visible' : '';

    return (
        <div className={`navigation ${visibleClassName}`}>
            <NavigationLink text={new Text('Notre entreprise', 'Notre entreprise')} to='/entreprise' isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='0.8s' />
            <NavigationSubLink text='Notre équipe' to='/entreprise#company-team' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
            <NavigationSubLink text='Nos valeurs' to='/entreprise#company-values' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />

            <div className={`spacing`}></div>

            <NavigationLink text={new Text('Nos projets', 'Nos projets')} to='/projets'  isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='1s'/>
            <NavigationSubLink text='Catégorie 1' to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
            <NavigationSubLink text='Catégorie 2' to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
            <NavigationSubLink text='Catégorie 3' to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
            <NavigationSubLink text='Catégorie 4' to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
            <NavigationSubLink text='Catégorie 5' to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />

            <div className={`spacing`}></div>

            <NavigationLink text={new Text('Nous contacter', 'Nous contacter')} to='/contact' isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='1.2s' />
        </div>
    );
}

export default Navigation;