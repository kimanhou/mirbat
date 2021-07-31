import React from 'react';
import Project, { ProjectCategory } from '../../../model/Project';
import Text from '../../../model/Text';
import './Navigation.scss';
import NavigationLink from './NavigationLink';
import NavigationSubLink from './NavigationSubLink';

interface INavigationProps {
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
    setActiveCategory : (activeCategory : ProjectCategory) => void;
}

const Navigation : React.FC<INavigationProps> = props => {
    const visibleClassName = props.isVisible ? 'visible' : '';
    const projectCategories = Project.getAllCategories().filter(t => t !== ProjectCategory.TOUS);

    return (
        <div className={`navigation ${visibleClassName}`}>
            <NavigationLink text={new Text('Notre entreprise', 'Notre entreprise')} to='/entreprise' isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='0.8s' />
            <NavigationSubLink text='Notre équipe' to='/entreprise#equipe' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
            <NavigationSubLink text='Nos valeurs' to='/entreprise#valeurs' isVisible={props.isVisible} setIsVisible={props.setIsVisible} />

            <div className={`spacing`}></div>

            <NavigationLink text={new Text('Nos projets', 'Nos projets')} to='/projets'  isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='1s'/>
            {projectCategories.map(t => <NavigationSubLink text={t} to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} activeCategory={t} setActiveCategory={props.setActiveCategory} />)}

            <div className={`spacing`}></div>

            <NavigationLink text={new Text('Nous contacter', 'Nous contacter')} to='/contact' isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='1.2s' />
        </div>
    );
}

export default Navigation;