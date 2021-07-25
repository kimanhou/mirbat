import React from 'react';
import './Footer.scss';

interface IFooterProps {
}

const Footer : React.FC<IFooterProps> = props => {

    return(
        <div className={`footer`}>
            <div className={`footer-copyright`}>
            </div>
            <div className={`footer-signature`}>
                Site web créé par Kim Anh Nguyen &amp; Mark Poussard
            </div>
            <div className={`footer-copyright`}>
                <span className={`year`}>&copy; 2021</span>
            </div>
        </div>
    )
}

export default Footer;