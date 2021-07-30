import React from 'react';
import './ProjectInfo.scss';

interface IProjectInfoProps {
    imageSrc : string;
    imageSrcBlack : string;
    info : string
    black ?: boolean;
}

const ProjectInfo : React.FC<IProjectInfoProps> = props => {
    const image = props.black ? props.imageSrcBlack : props.imageSrc;

    return (
        <div className={`project-info flex-row`}>
            <img className={`icon`} alt='Symbole de surface' src={image} />
            {props.info}
        </div>
    );
}

export default ProjectInfo;