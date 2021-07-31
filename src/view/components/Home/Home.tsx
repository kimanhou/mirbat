import React, { useState } from 'react';
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
}

const Home : React.FC<IHomeProps> = props => {
    const [ isNavVisible, setIsNavVisible ] = useState(false);
    const isNavVisibleClassName = isNavVisible ? 'nav-visible' : '';

    return (
        <div className={`home`}>
            <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
            <Navigation isVisible={isNavVisible} setIsVisible={setIsNavVisible} setActiveCategory={props.setActiveCategory}/>
            <div className={`home-content`}>
                <div className={`home-content-moving ${isNavVisibleClassName}`}>
                    <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} iswhite/>
                    <div className={`home-hero`}></div>
                    <div className={`home-tag-line`}>
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. 
                    </div>
                    <div className={`home-content-wrapper`}>
                        <OurCompany />
                        <OurProjects />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;