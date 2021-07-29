import React from 'react';
import './BackgroundOnHover.scss';

interface IBackgroundOnHoverProps {
    className : string;
    delay ?: string;
}

const BackgroundOnHover : React.FC<IBackgroundOnHoverProps> = props => {
    return(<div className={`background-on-hover ${props.className}`} style={{ transitionDelay: props.delay }}></div>);
}

export default BackgroundOnHover;