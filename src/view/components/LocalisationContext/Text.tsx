import React, { useContext } from 'react';
import Local from './Local';
import { LocalValueContext } from './LocalContext';

interface ITextProps {
    english : string;
    french : string;
}

const Text : React.FC<ITextProps> = props => {
    var localisation = useContext(LocalValueContext);
    var content = "";
    switch (localisation) {
        case Local.FR:
            content = props.french;
        break;
        case Local.EN:
            content = props.english;
        break;
    }
    return (
        <>{content}</>
    );
}

export default Text;