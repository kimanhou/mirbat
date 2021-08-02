import React, { useEffect, useState } from 'react';
import Page from '../Page/Page';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import './ProjectsPage.scss';
import ProjectFilter from './ProjectFilter/ProjectFilter';
import Project, { ProjectCategory } from '../../../model/Project';

interface IProjectsPageProps {
    activeCategory : ProjectCategory;
    setActiveCategory : (activeCategory : ProjectCategory) => void;
}

const ProjectsPage : React.FC<IProjectsPageProps> = props => {
    const isCat1Active = props.activeCategory === ProjectCategory.TOUS;
    const isCat2Active = props.activeCategory === ProjectCategory.LOGEMENTS;
    const isCat3Active = props.activeCategory === ProjectCategory.BUREAUX;
    const isCat4Active = props.activeCategory === ProjectCategory.EQUIPEMENTS;
    const isCat5Active = props.activeCategory === ProjectCategory.EN_COURS;

    const [isInvisible, setIsInvisible] = useState(false);
    const isInvisibleClassname = isInvisible ? 'is-invisible' : '';

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
        <Page className={`nos-projets-page`} title='Nos projets' setActiveCategory={props.setActiveCategory}>
            <div className={`nos-projets-filtres flex-row`}>
                <ProjectFilter category={ProjectCategory.TOUS} active={isCat1Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.LOGEMENTS} active={isCat2Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.BUREAUX}  active={isCat3Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.EQUIPEMENTS}  active={isCat4Active} onClickCategory={onCategoryClick} />
                <ProjectFilter category={ProjectCategory.EN_COURS}  active={isCat5Active} onClickCategory={onCategoryClick} />
            </div>
            <div className={`nos-projets-container flex-row ${isInvisibleClassname}`}>
                {Project.filterByCategory(props.activeCategory).map((t, i) => <ProjectPreview project={t} active={active} transitionDelay={`${i * 0.1}s`}/>)}
            </div>
        </Page>
    );
}

export default ProjectsPage;