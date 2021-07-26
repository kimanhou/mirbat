import React, { useEffect, useState } from 'react';
import './Header.scss';
import NavIcon from './NavIcon';

interface IHeaderProps {
    isNavVisible : boolean;
    setIsNavVisible : (isNavVisible : boolean) => void;
    iswhite ?: boolean;
}

const Header : React.FC<IHeaderProps> = props => {
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
        <div className={`header flex-row ${isWhiteClassName} ${isTransparentClassName}`}>
            <NavIcon isNavVisible={props.isNavVisible} setIsNavVisible={props.setIsNavVisible} iswhite={props.iswhite}/>
            <div className={`header-name`}>
                {writtenText}
            </div>
        </div>
    );
}

export default Header;