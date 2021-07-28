import React from 'react';
import Page from '../Page/Page';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import './ProjectsPage.scss';
import project1 from '../../../images/projects/project-1.jpg';
import project2 from '../../../images/projects/project-2.jpg';
import project3 from '../../../images/projects/project-3.jpg';
import project4 from '../../../images/projects/project-4.jpg';
import project5 from '../../../images/projects/project-5.jpg';
import project6 from '../../../images/projects/project-6.jpg';
import project7 from '../../../images/projects/project-7.jpg';
import project8 from '../../../images/projects/project-8.jpg';
import project9 from '../../../images/projects/project-9.jpg';
import project10 from '../../../images/projects/project-10.jpg';

const ProjectsPage : React.FC = props => {
    return (
        <Page className={`nos-projets-page`} title='Nos projets'>
            <div className={`nos-projets-container flex-row`}>
                <ProjectPreview backgroundImageUrl={project1}/>
                <ProjectPreview backgroundImageUrl={project2}/>
                <ProjectPreview backgroundImageUrl={project3}/>
                <ProjectPreview backgroundImageUrl={project4}/>
                <ProjectPreview backgroundImageUrl={project5}/>
                <ProjectPreview backgroundImageUrl={project6}/>
                <ProjectPreview backgroundImageUrl={project7}/>
                <ProjectPreview backgroundImageUrl={project8}/>
                <ProjectPreview backgroundImageUrl={project9}/>
                <ProjectPreview backgroundImageUrl={project10}/>
            </div>
        </Page>
    );
}

export default ProjectsPage;