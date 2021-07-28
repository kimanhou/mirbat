import React from 'react';
import './SectionTitle.scss';

interface ISectionTitleProps {
    title : string;
    active : boolean;
}

const SectionTitle : React.FC<ISectionTitleProps> = props => {
    const activeClassName = props.active ? 'active' : '';

    return (
        <div className={`section-title ${activeClassName}`}>
            {props.title}
            <div className={`underlines`}>
                <div className={`thin-underline`}></div>
                <div className={`thick-underline`}></div>
            </div>
        </div>
    );
}

export default SectionTitle;