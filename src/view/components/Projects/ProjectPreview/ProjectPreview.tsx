import React from 'react';
import BackgroundOnHover from '../../Navigation/LinkWithBackground/BackgroundOnHover';
import './ProjectPreview.scss';
import ProjectSurface from './ProjectInfo/ProjectSurface';
import ProjectDuration from './ProjectInfo/ProjectDuration';
import ProjectLocation from './ProjectInfo/ProjectLocation';
import Project from '../../../../model/Project';
import { Link, useHistory } from 'react-router-dom';

interface IProjectPreviewProps {
    project : Project;
    active : boolean;
    launchPageTransition : () => void;
    transitionDelay ?: string;
}

const ProjectPreview : React.FC<IProjectPreviewProps> = props => {
    const activeClassName = props.active ? 'active' : '';
    const history = useHistory();

    const onClick : React.MouseEventHandler<HTMLAnchorElement> = e => {
        e.preventDefault();
        setTimeout(() => history.push(props.project.getLink()), 1000);
        props.launchPageTransition();
    }
    
    return (
        <Link className={`project-preview ${activeClassName}`} to={props.project.getLink()} onClick={onClick}
            style={{ backgroundImage: `url(${props.project.images[0].url})`, transitionDelay: props.transitionDelay }}>
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