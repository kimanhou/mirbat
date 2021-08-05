import React, { useEffect, useState } from 'react';
import { ProjectCategory } from '../../../model/Project';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Contact from './Contact/Contact';
import './Home.scss';
import OurCompany from './OurCompany/OurCompany';
import OurProjects from './OurProjects/OurProjects';

interface IHomeProps {
    setActiveCategory : (activeCategory : ProjectCategory) => void;
    launchPageTransition : () => void;
}

const Home : React.FC<IHomeProps> = props => {
    const [ isNavVisible, setIsNavVisible ] = useState(false);
    const isNavVisibleClassName = isNavVisible ? 'nav-visible' : '';

    const [ backgroundSize, setBackgroundSize ] = useState('120%');

    useEffect(() => {
        const onScroll = () => {
            const scrollMax = 20 + 0.5 * document.documentElement.clientHeight;
            const backgroundSize = - (window.scrollY) / scrollMax * 20 + 120;
            const limitedBackgroundSize = Math.max(Math.min(backgroundSize, 120), 100);
            setBackgroundSize(`${limitedBackgroundSize}%`);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ ]);

    return (
        <div className={`home`}>
            <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} launchPageTransition={props.launchPageTransition} />
            <Navigation isVisible={isNavVisible} setIsVisible={setIsNavVisible} setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition}/>
            <div className={`home-content`}>
                <div className={`home-content-moving ${isNavVisibleClassName}`}>
                    <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} iswhite launchPageTransition={props.launchPageTransition} />
                    <div className={`home-hero`} style={{ backgroundSize: backgroundSize }}></div>
                    <div className={`home-tag-line`}>
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. 
                    </div>
                    <div className={`home-content-wrapper`}>
                        <OurCompany launchPageTransition={props.launchPageTransition} />
                        <OurProjects setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition} />
                        <Contact />
                        <Footer launchPageTransition={props.launchPageTransition} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;