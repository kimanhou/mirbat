import React from 'react';
import surfaceIcon from '../../../../../images/projects/time.png';
import ProjectInfo from './ProjectInfo';

interface IProjectDurationProps {
    duration : string;
}

const ProjectDuration : React.FC<IProjectDurationProps> = props => {
    return (
        <ProjectInfo imageSrc={surfaceIcon} info={props.duration} />
    );
}

export default ProjectDuration;