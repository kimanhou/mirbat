import React from 'react';
import surfaceIcon from '../../../../../images/projects/location.png';
import ProjectInfo from './ProjectInfo';

interface IProjectLocationProps {
    location : string;
}

const ProjectLocation : React.FC<IProjectLocationProps> = props => {
    return (
        <ProjectInfo imageSrc={surfaceIcon} info={props.location} />
    );
}

export default ProjectLocation;