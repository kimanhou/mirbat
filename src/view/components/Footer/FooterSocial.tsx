import React from 'react';
import './FooterSocial.scss';

interface IFooterSocialProps {
    classname : string;
    link : string;
}

const FooterSocial : React.FC<IFooterSocialProps> = props => {

    return(
        <div className={`footer-social ${props.classname}`}>
            <div className={`footer-social-background-hover`}></div>
            <a href={props.link} target='_blank'/>
            {props.classname}
        </div>
    )
}

export default FooterSocial;