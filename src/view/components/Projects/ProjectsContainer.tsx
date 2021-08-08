import React from 'react';
import Project, { ProjectCategory } from '../../../model/Project';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import './ProjectsContainer.scss';

interface IProjectsContainerProps {
    activeCategory : ProjectCategory;
    launchPageTransition : () => void;
    active : boolean;
    projects : Project[];
    isInvisible : boolean;
}

const ProjectsContainer : React.FC<IProjectsContainerProps> = props => {
    const isInvisibleClassname = props.isInvisible ? 'is-invisible' : '';
    return (
        <div className={`nos-projets-container flex-row ${isInvisibleClassname}`}>
            {Project.filterByCategory(props.projects, props.activeCategory).map(
                (t, i) => <ProjectPreview project={t} active={props.active} launchPageTransition={props.launchPageTransition} transitionDelay={`${i * 0.1}s`}/>)}
        </div>
    );
}

export default ProjectsContainer;