import React from 'react';
import BackgroundOnHover from '../../Navigation/LinkWithBackground/BackgroundOnHover';
import './ProjectPreview.scss';
import ProjectSurface from './ProjectInfo/ProjectSurface';
import ProjectDuration from './ProjectInfo/ProjectDuration';
import ProjectLocation from './ProjectInfo/ProjectLocation';
import Project from '../../../../model/Project';
import { Link } from 'react-router-dom';

interface IProjectPreviewProps {
    project : Project;
}

const ProjectPreview : React.FC<IProjectPreviewProps> = props => {
    return (
        <Link className={`project-preview`} to={props.project.getLink()} style={{ backgroundImage: `url(${props.project.images[0].url})` }}>
            <div className={`hover-shadow`}></div>
            <div className={`text flex-column`}>
                <div className={`project-title uppercase`}>
                    {props.project.title}
                </div>
                <div className={`project-info flex-row`}>
                    <ProjectSurface surface={props.project.surface} />
                    <ProjectDuration duration={props.project.duration} />
                    <ProjectLocation location={props.project.location} />
                </div>
                <div className={`read-more`}>
                    <i>Découvrir</i>
                    <BackgroundOnHover className={`read-more-background`} delay='.2s' />
                </div>
            </div>
        </Link>
    );
}

export default ProjectPreview;