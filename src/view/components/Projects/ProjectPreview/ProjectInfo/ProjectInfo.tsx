import React from 'react';
import './ProjectInfo.scss';

interface IProjectInfoProps {
    imageSrc : string;
    info : string
}

const ProjectInfo : React.FC<IProjectInfoProps> = props => {
    return (
        <div className={`project-info flex-row`}>
            <img className={`icon`} alt='Symbole de surface' src={props.imageSrc} />
            {props.info}
        </div>
    );
}

export default ProjectInfo;