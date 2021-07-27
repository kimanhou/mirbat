import React from 'react';
import './BackgroundOnHover.scss';

interface IBackgroundOnHoverProps {
    className : string;
}

const BackgroundOnHover : React.FC<IBackgroundOnHoverProps> = props => {
    return(<div className={`background-on-hover ${props.className}`}></div>);
}

export default BackgroundOnHover;