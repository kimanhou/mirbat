import React, { useEffect, useState } from 'react';
import Project, { ProjectCategory } from '../../../model/Project';
import Page from '../Page/Page';
import ProjectFilter from './ProjectFilter/ProjectFilter';
import ProjectsContainer from './ProjectsContainer';
import './ProjectsPage.scss';

interface IProjectsPageProps {
    activeCategory : ProjectCategory;
    setActiveCategory : (activeCategory : ProjectCategory) => void;
    launchPageTransition : () => void;
    projects : Project[];
}

const ProjectsPage : React.FC<IProjectsPageProps> = props => {
    const isCat1Active = props.activeCategory === ProjectCategory.TOUS;
    const isCat2Active = props.activeCategory === ProjectCategory.LOGEMENTS;
    const isCat3Active = props.activeCategory === ProjectCategory.BUREAUX;
    const isCat4Active = props.activeCategory === ProjectCategory.EQUIPEMENTS;
    const isCat5Active = props.activeCategory === ProjectCategory.EN_COURS;

    const [isInvisible, setIsInvisible] = useState(false);

    const onCategoryClick = (category : ProjectCategory) => {
        setIsInvisible(true);
        setTimeout(() => {
            props.setActiveCategory(category);
            setIsInvisible(false);
        }, 1000);
    }

    const [ active, setActive ] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 1000);
    }, []);

    return (
        <Page className={`nos-projets-page`} title='Nos projets' setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition}>
            <div className={`nos-projets-filtres flex-row`}>
                <ProjectFilter category={ProjectCategory.TOUS} active={isCat1Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.LOGEMENTS} active={isCat2Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.BUREAUX}  active={isCat3Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.EQUIPEMENTS}  active={isCat4Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.EN_COURS}  active={isCat5Active} onClickCategory={onCategoryClick} />
            </div>
            <ProjectsContainer launchPageTransition={props.launchPageTransition} activeCategory={props.activeCategory} 
                isInvisible={isInvisible} active={active} projects={props.projects} />
        </Page>
    );
}

export default ProjectsPage;