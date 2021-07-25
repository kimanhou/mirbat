import React, { useState } from 'react';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './FadeIn.scss';

interface IFadeInProps {
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

    return(
        <div className={`fade-in ${onActiveClassname} ${inline} ${noDelay}`}>
            {props.children}
            <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={'screen-detector-fade-in'}/>
        </div>
    );
}

export default FadeIn;