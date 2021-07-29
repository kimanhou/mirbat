import React from 'react';
import Project from '../../../../model/Project';
import Page from '../../Page/Page';
import './ProjectTemplate.scss';

interface IProjectTemplateProps {
    project : Project;
}

const ProjectTemplate : React.FC<IProjectTemplateProps> = props => {
    return (
        <div className={`project-template`}></div>
    );
}

export default ProjectTemplate;