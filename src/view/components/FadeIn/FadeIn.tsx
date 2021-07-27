import React, { useState } from 'react';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './FadeIn.scss';

interface IFadeInProps {
    className ?: string;
    inline ?: boolean;
    noDelay ?: boolean;
}

const FadeIn : React.FC<IFadeInProps> = props => {
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }
    
    const inline = props.inline ? "inline" : "";
    const noDelay = props.noDelay ? "no-delay" : "";
    const className = props.className !== undefined ? props.className : '';

    return(
        <div className={`fade-in ${className} ${onActiveClassname} ${inline} ${noDelay}`}>
            {props.children}
            <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={'screen-detector-fade-in'}/>
        </div>
    );
}

export default FadeIn;