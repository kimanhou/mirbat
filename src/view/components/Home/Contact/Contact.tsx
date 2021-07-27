import React, { useState } from 'react';
import FadeIn from '../../FadeIn/FadeIn';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import './Contact.scss';

const Contact : React.FC = props => {
    const [active, setActive] = useState(false);
    const activeClassName = active ? 'active' : '';
    
    return (
        <FadeIn className={`home-contact ${activeClassName}`}>
            <ScreenDetector onActive={() => setActive(true)} onUnactive={() => setActive(false)} />
            <div className={`home-contact-background`}></div>
            <div className={`home-contact-content`}>
                <div className={`home-contact-title`}>
                    Nous contacter
                    <div className={`underlines`}>
                        <div className={`thin-underline`}></div>
                        <div className={`thick-underline`}></div>
                    </div>
                </div>
                <a href='mailto:hello@mirbat.com' className={`home-contact-email`}>hello@mirbat.com</a>
            </div>
        </FadeIn>
    );
}

export default Contact;