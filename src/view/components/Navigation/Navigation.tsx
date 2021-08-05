import React from 'react';
import Project, { ProjectCategory } from '../../../model/Project';
import './Navigation.scss';
import NavigationLink from './NavigationLink';
import NavigationSubLink from './NavigationSubLink';

interface INavigationProps {
    isVisible : boolean;
    setIsVisible : (isVisible : boolean) => void;
    setActiveCategory : (activeCategory : ProjectCategory) => void;
    launchPageTransition : () => void;
}

const Navigation : React.FC<INavigationProps> = props => {
    const visibleClassName = props.isVisible ? 'visible' : '';
    const projectCategories = Project.getAllCategories().filter(t => t !== ProjectCategory.TOUS);

    return (
        <div className={`navigation ${visibleClassName}`}>
            <NavigationLink text={'Notre entreprise'} to='/entreprise' isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='0.8s' launchPageTransition={props.launchPageTransition} />
            <NavigationSubLink text='Notre équipe' to='/entreprise' scrollToAnchor={'equipe'} isVisible={props.isVisible} setIsVisible={props.setIsVisible} launchPageTransition={props.launchPageTransition} />
            <NavigationSubLink text='Nos valeurs' to='/entreprise' scrollToAnchor={'valeurs'}  isVisible={props.isVisible} setIsVisible={props.setIsVisible} launchPageTransition={props.launchPageTransition} />

            <div className={`spacing`}></div>

            <NavigationLink text={'Nos projets'} to='/projets'  isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='1s' launchPageTransition={props.launchPageTransition} />
            {projectCategories.map(t => <NavigationSubLink text={t} to='/projets' isVisible={props.isVisible} setIsVisible={props.setIsVisible} activeCategory={t} setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition} />)}

            <div className={`spacing`}></div>

            <NavigationLink text={'Nous contacter'} to='/' scrollToAnchor={'contact'} isVisible={props.isVisible} setIsVisible={props.setIsVisible} transitionDelay='1.2s' launchPageTransition={props.launchPageTransition} />
        </div>
    );
}

export default Navigation;