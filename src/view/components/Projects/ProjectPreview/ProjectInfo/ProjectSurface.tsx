import React from 'react';
import surfaceIcon from '../../../../../images/projects/square-meter.png';
import ProjectInfo from './ProjectInfo';

interface IProjectSurfaceProps {
    surface : string;
}

const ProjectSurface : React.FC<IProjectSurfaceProps> = props => {
    return (
        <ProjectInfo imageSrc={surfaceIcon} info={props.surface} />
    );
}

export default ProjectSurface;