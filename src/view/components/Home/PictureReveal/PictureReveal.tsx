import React from 'react';
import './PictureReveal.scss';

interface IPictureRevealProps {
    active : boolean;
    backgroundImageUrl : string;
    className ?: string;
    contain ?: boolean;
    delay ?: string;
}

const PictureReveal : React.FC<IPictureRevealProps> = props => {
    const activeClassName = props.active ? 'active' : '';
    const classNameClassName = props.className !== undefined ? props.className : '';
    const containClassName = props.contain ? 'contain' : '';

    return (
        <div className={`picture-reveal ${classNameClassName} ${activeClassName} ${containClassName}`}
            style={{ backgroundImage: `url(${props.backgroundImageUrl})` }}>
            <div className={`picture-reveal-cover`} style={{ transitionDelay: props.delay }}></div>
        </div>
    );
}

export default PictureReveal;