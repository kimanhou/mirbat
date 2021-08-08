import React, { useEffect, useState } from 'react';
import './IntroBackground.scss';

interface IIntroBackgroundProps {
    visible : boolean;
}

const IntroBackground : React.FC<IIntroBackgroundProps> = props => {
    const visibleClassName = props.visible ? 'visible' : '';

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);


    return (
        <svg className={`intro-background ${visibleClassName}`} viewBox={`0 0 ${width} ${height}`}>
            <defs>
                <mask id="mask-1" x="0" y="0" width="100%" height="100%">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <text x="50%" y="50%" fontSize="30vw" textAnchor="middle" dominantBaseline="middle" fill="black">MirBat.</text>
                </mask>
                <mask id="mask-2" x="0" y="0" width="100%" height="100%">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <text x="50%" y="50%" fontSize="30vw" textAnchor="middle" dominantBaseline="middle" fill="black">MirBat.</text>
                </mask>
            </defs>
            <rect x="0" y="0"  width="100%" height="50%" mask="url(#mask-1)" fill="white" className={`upper`}></rect>
            <rect x="0" y="50%"  width="100%" height="50%" mask="url(#mask-2)" fill="white" className={`lower`}></rect>
        </svg>
    );
}

export default IntroBackground;