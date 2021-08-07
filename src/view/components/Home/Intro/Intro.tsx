import React, { useEffect, useState } from 'react';
import './Intro.scss';
import IntroBackground from './IntroBackground';

interface IIntroProps {
    visible : boolean;
    setVisible : (visible : boolean) => void;
}

const Intro : React.FC<IIntroProps> = props => {
    const visibleClassName = props.visible ? 'visible' : '';

    const [ active, setActive ] = useState(false);
    const activeClassName = active ? 'active' : '';
    useEffect(() => {
        if (props.visible) {
            setTimeout(() => setActive(true), 800);
        }
    }, [ props.visible ]);

    const onClickEnter = () => {
        props.setVisible(false);
    }

    return (
        <div className={`intro-screen flex-row ${visibleClassName}`}>
            <IntroBackground visible={props.visible} />
            <div className={`enter ${activeClassName}`} onClick={onClickEnter}>
                Entrer
                <div className={`underlines`}>
                    <div className={`thin-underline`}></div>
                    <div className={`thick-underline`}></div>
                </div>
            </div>
        </div>
    );
}

export default Intro;