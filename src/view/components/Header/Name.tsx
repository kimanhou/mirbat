import React, { useEffect, useState } from 'react';
import './Name.scss';

interface INameProps {
    iswhite ?: boolean;
    isNavVisible : boolean;
}

const Name : React.FC<INameProps> = props => {
    const isWhiteClassName = props.iswhite ? 'white' : '';
    const isTransparentClassName = props.iswhite === true && props.isNavVisible ? "transparent" : "";

    var [writtenText, setWrittenText] = useState('');
    const mirbat = `MirBat.`;
    const writeText = (wordIndex : number) => {
        setWrittenText(mirbat.slice(0, wordIndex));
        if(wordIndex + 1 > mirbat.length){
            setTimeout(() => deleteText(mirbat.length), 10000);
        }
        else {
            setTimeout(() => writeText(wordIndex + 1), 100);
        }
    }

    const deleteText = (wordIndex : number) => {
        setWrittenText(mirbat.slice(0, wordIndex));
        if(wordIndex - 1 < 0){
            setTimeout(() => writeText(0), 1000);
        }
        else {
            setTimeout(() => deleteText(wordIndex - 1), 100);
        }
    }

    useEffect(() => {
        setTimeout(() => writeText(0), 1000);
    }, []);

    return (
        <div className={`name ${isWhiteClassName} ${isTransparentClassName}`}>
            {writtenText}
        </div>
    );
}

export default Name;