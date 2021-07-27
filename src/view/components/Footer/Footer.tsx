import React from 'react';
import FadeIn from '../FadeIn/FadeIn';
import './Footer.scss';

interface IFooterProps {
}

const Footer : React.FC<IFooterProps> = props => {

    return(
        <FadeIn className={`footer`} noDelay>
            <div className={`footer-copyright`}>
            </div>
            <div className={`footer-signature`}>
                Site web créé par Kim Anh Nguyen &amp; Mark Poussard
            </div>
            <div className={`footer-copyright`}>
                <span className={`year`}>&copy; 2021</span>
            </div>
        </FadeIn>
    )
}

export default Footer;