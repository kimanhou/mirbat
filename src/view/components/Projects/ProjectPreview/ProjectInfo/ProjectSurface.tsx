import React from 'react';
import surfaceIcon from '../../../../../images/projects/square-meter.png';
import surfaceIconBlack from '../../../../../images/projects/square-meter-black.png';
import ProjectInfo from './ProjectInfo';

interface IProjectSurfaceProps {
    surface : string;
    black ?: boolean;
}

const ProjectSurface : React.FC<IProjectSurfaceProps> = props => {
    return (
        <ProjectInfo imageSrc={surfaceIcon} info={props.surface} imageSrcBlack={surfaceIconBlack} black={props.black} />
    );
}

export default ProjectSurface;