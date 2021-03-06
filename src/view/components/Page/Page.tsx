import React, { useState } from 'react';
import { ProjectCategory } from '../../../model/Project';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './Page.scss';

interface IPageProps {
    className ?: string;
    title : string;
    setActiveCategory : (activeCategory : ProjectCategory) => void;
    launchPageTransition : () => void;
}

const Page : React.FC<IPageProps> = props => {
    const classNameClassName = props.className !== undefined ? props.className : '';

    const [ isNavVisible, setIsNavVisible ] = useState(false);
    const isNavVisibleClassName = isNavVisible ? 'nav-visible' : '';

    const [ isTitleActive, setIsTitleActive ] = useState(false);
    const setIsTitleActiveClassName = isTitleActive ? 'title-active' : '';
    
    return (
        <div className={`page ${classNameClassName}`}>
            <div className={`page-wrapper`}>
                <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} launchPageTransition={props.launchPageTransition} />
                <Navigation isVisible={isNavVisible} setIsVisible={setIsNavVisible} setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition} />
                <div className={`content`}>
                    <div className={`content-moving ${isNavVisibleClassName}`}>
                        <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} launchPageTransition={props.launchPageTransition} />
                        <div className={`page-content`}>
                            <div className={`page-title ${setIsTitleActiveClassName}`}>
                                <ScreenDetector className={`screen-detector-page-title`} onActive={() => setIsTitleActive(true)} onUnactive={() => setIsTitleActive(false)}/>
                                <div className={`page-title-container`}>
                                    {props.title}
                                    <div className={`thick-underline`}></div>
                                </div>
                                <div className={`underlines`}>
                                    <div className={`thin-underline`}></div>
                                </div>
                            </div>

                            {props.children}
                            <Footer launchPageTransition={props.launchPageTransition} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`page-cover ${isNavVisibleClassName}`}></div>
        </div>
    );
}

export default Page;