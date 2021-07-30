import React from 'react';
import durationIcon from '../../../../../images/projects/time.png';
import durationIconBlack from '../../../../../images/projects/time-black.png';
import ProjectInfo from './ProjectInfo';

interface IProjectDurationProps {
    duration : string;
    black ?: boolean;
}

const ProjectDuration : React.FC<IProjectDurationProps> = props => {
    return (
        <ProjectInfo imageSrc={durationIcon} info={props.duration} imageSrcBlack={durationIconBlack} black={props.black }/>
    );
}

export default ProjectDuration;