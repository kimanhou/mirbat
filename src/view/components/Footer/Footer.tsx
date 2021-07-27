import React, { useState } from 'react';
import FadeIn from '../FadeIn/FadeIn';
import Name from '../Header/Name';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './Footer.scss';

interface IFooterProps {
}

const Footer : React.FC<IFooterProps> = props => {
    const [active, setActive] = useState(false);
    const activeClassName = active ? 'active' : '';
    
    return(
        <FadeIn className={`footer ${activeClassName}`} noDelay>
            <ScreenDetector onActive={() => setActive(true)} onUnactive={() => setActive(false)} />
            <div className={`thick-underline`}></div>
            <div className={`name-container`}>
                <Name isNavVisible={false}/>
            </div>
            <div className={`footer-content flex-row`}>
                <div className={`footer-copyright`}>
                </div>
                <div className={`footer-signature`}>
                    Site web créé par Kim Anh Nguyen &amp; Mark Poussard
                </div>
                <div className={`footer-copyright`}>
                    <span className={`year`}>&copy; 2021</span>
                </div>
            </div>
        </FadeIn>
    )
}

export default Footer;