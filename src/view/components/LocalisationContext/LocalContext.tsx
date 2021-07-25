import React, { createContext, useState } from 'react';
import Local from './Local';

const getDefaultLocal = () => {
    let languages : string[] = [];
    if (navigator.languages != null){
        languages = navigator.languages.slice();
    }
    else {
        languages = [navigator.language];
    }
    languages = languages.map(lang => lang.slice(0, 2).toUpperCase());
    while(languages.length > 0){
        let language = languages.shift();
        if(Local.EN.getShortName() === language){
            return Local.EN;
        }
        if(Local.FR.getShortName() === language){
            return Local.FR;
        }
    }
    return Local.EN;
}

export const LocalValueContext = createContext(Local.EN);
export const SetLocalContext = createContext((local : Local) => {});

const LocalContext : React.FC = props => {
    const [local, setLocal] = useState(() => getDefaultLocal());
    return (
        <SetLocalContext.Provider value={setLocal}>
            <LocalValueContext.Provider value={local}>
                {props.children}
            </LocalValueContext.Provider>
        </SetLocalContext.Provider>
    )
}
export default LocalContext;