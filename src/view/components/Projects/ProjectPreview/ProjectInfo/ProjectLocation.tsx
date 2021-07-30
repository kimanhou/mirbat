import React from 'react';
import locationIcon from '../../../../../images/projects/location.png';
import locationIconBlack from '../../../../../images/projects/location-black.png';
import ProjectInfo from './ProjectInfo';

interface IProjectLocationProps {
    location : string;
    black ?: boolean;
}

const ProjectLocation : React.FC<IProjectLocationProps> = props => {
    return (
        <ProjectInfo imageSrc={locationIcon} info={props.location} imageSrcBlack={locationIconBlack} black={props.black} />
    );
}

export default ProjectLocation;