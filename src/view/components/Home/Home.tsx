import React, { useEffect, useRef, useState } from 'react';
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

    const heroRef = useRef<HTMLDivElement>(null);

    const vertical = () => {
        if (heroRef.current != null) {
            const width = heroRef.current.getBoundingClientRect().width;
            const height = heroRef.current.getBoundingClientRect().height;
            const heroImageRatio = 1205 / 957;
            if ((height / width) > heroImageRatio) {
                return true;
            }
            return false;
        }
        return false;
    }

    const calculateBackgroundSize = () => {
        const scrollMax = 20 + 0.5 * document.documentElement.clientHeight;
            const backgroundSize = - (window.scrollY) / scrollMax * 20 + 120;
            const limitedBackgroundSize = Math.max(Math.min(backgroundSize, 120), 100);
            if (vertical()) {
                setBackgroundSize(`auto ${limitedBackgroundSize}%`);
            }
            else {
                setBackgroundSize(`${limitedBackgroundSize}%`);
            }
    }

    useEffect(() => {
        const temp = calculateBackgroundSize;
        window.addEventListener('scroll', temp);
        return () => window.removeEventListener('scroll', temp);
    }, [ vertical() ]);

    useEffect(() => {
        calculateBackgroundSize();
    }, [ vertical() ]);

    return (
        <div className={`home`}>
            <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} launchPageTransition={props.launchPageTransition} />
            <Navigation isVisible={isNavVisible} setIsVisible={setIsNavVisible} setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition}/>
            <div className={`home-content`}>
                <div className={`home-content-moving ${isNavVisibleClassName}`}>
                    <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} iswhite launchPageTransition={props.launchPageTransition} />
                    <div className={`home-hero`} ref={heroRef}
                        style={{ backgroundSize: backgroundSize }}
                    ></div>
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