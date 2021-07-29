import React, { useState } from 'react';
import Page from '../Page/Page';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import './ProjectsPage.scss';
import ProjectFilter from './ProjectFilter/ProjectFilter';
import Project, { ProjectCategory } from '../../../model/Project';

const ProjectsPage : React.FC = props => {
    const [ activeCategory, setActiveCategory ] = useState(ProjectCategory.TOUS);
    const isCat1Active = activeCategory === ProjectCategory.TOUS;
    const isCat2Active = activeCategory === ProjectCategory.LOGEMENTS;
    const isCat3Active = activeCategory === ProjectCategory.BUREAUX;
    const isCat4Active = activeCategory === ProjectCategory.EQUIPEMENTS;
    const isCat5Active = activeCategory === ProjectCategory.EN_COURS;

    return (
        <Page className={`nos-projets-page`} title='Nos projets'>
            <div className={`nos-projets-filtres flex-row`}>
                <ProjectFilter category={ProjectCategory.TOUS} active={isCat1Active} setActiveCategory={setActiveCategory} />
                <ProjectFilter category={ProjectCategory.LOGEMENTS} active={isCat2Active} setActiveCategory={setActiveCategory} />
                <ProjectFilter category={ProjectCategory.BUREAUX}  active={isCat3Active} setActiveCategory={setActiveCategory} />
                <ProjectFilter category={ProjectCategory.EQUIPEMENTS}  active={isCat4Active} setActiveCategory={setActiveCategory} />
                <ProjectFilter category={ProjectCategory.EN_COURS}  active={isCat5Active} setActiveCategory={setActiveCategory} />
            </div>
            <div className={`nos-projets-container flex-row`}>
                {Project.filterByCategory(activeCategory).map(t => <ProjectPreview project={t} />)}
            </div>
        </Page>
    );
}

export default ProjectsPage;