import React, { useState } from 'react';
import { useParams } from 'react-router';
import Project, { ProjectCategory } from '../../../../model/Project';
import FitText from '../../FitText/FitText';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navigation from '../../Navigation/Navigation';
import ProjectDuration from '../ProjectPreview/ProjectInfo/ProjectDuration';
import ProjectLocation from '../ProjectPreview/ProjectInfo/ProjectLocation';
import ProjectSurface from '../ProjectPreview/ProjectInfo/ProjectSurface';
import ProjectFullScreenGallery from './Gallery/ProjectFullScreenGallery';
import ProjectImage from './Gallery/ProjectImage';
import ProjectTemplateGalleryArrows from './Gallery/ProjectTemplateGalleryArrows';
import './ProjectTemplate.scss';
import ProjectTemplateBackButton from './ProjectTemplateBackButton';

interface IProjectTemplateProps {
    setActiveCategory : (activeCategory : ProjectCategory) => void;
    launchPageTransition : () => void;
}

const ProjectTemplate : React.FC<IProjectTemplateProps> = props => {
    let { projectId } = useParams<{projectId ?: string}>();
    const allProjects = Project.getAllSortedProjects();
    var foundProject = allProjects.find(t => t.id.toString() === projectId);
    const project = foundProject === undefined ? allProjects[0] : foundProject;
    
    const [ isNavVisible, setIsNavVisible ] = useState(false);
    const isNavVisibleClassName = isNavVisible ? 'nav-visible' : '';

    const [ imageWidths, setImageWidths ] = useState<number[]>(project.images.map(t => 0));
    const updateImageWidth = (i : number) => (width : number) => {
        setImageWidths(imageWidths => {
            const clone = [...imageWidths];
            clone[i] = width;
            return clone;
        });
    }

    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

    const offset = imageWidths.slice(0, currentImageIndex).reduce((a,b) => a+b+20, 0);

    const [ fullScreenGalleryVisibile, setFullScreenGalleryVisibile ] = useState(false);

    return (
        <div className={`project-template`}>
            <div className={`project-template-wrapper`}>
                <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} launchPageTransition={props.launchPageTransition} />
                <Navigation isVisible={isNavVisible} setIsVisible={setIsNavVisible} setActiveCategory={props.setActiveCategory} launchPageTransition={props.launchPageTransition} />
                <Header className={`absolute`} isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} iswhite launchPageTransition={props.launchPageTransition} />
                <div className={`content`}>
                    <div className={`content-moving ${isNavVisibleClassName}`}>
                        <div className={`project-template-content`}>
                            <div className={`project-template-title`} style={{ backgroundImage: `url(${project.images[0].url})` }} >
                                <div className={`project-template-title-container-container`}>
                                <div className={`project-template-title-container`}>
                                    {project.getDateYear()} - {project.location}
                                    <div className={`underlines`}>
                                        <div className={`thin-underline`}></div>
                                        <div className={`thick-underline`}></div>
                                    </div>
                                    <div className={`project-title`}>
                                        <FitText>{project.title}</FitText>
                                    </div>  
                                </div>
                                </div>
                            </div>

                            <ProjectTemplateBackButton launchPageTransition={props.launchPageTransition}/>
                            <div className={`project-template-details flex-row`}>
                                <div className={`project-template-description flex-1`}>
                                    <p>
                                        <b>
                                            {project.descriptionIntro}
                                        </b>
                                    </p>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className={`project-template-info`}>
                                    <div className={`thick-underline`}></div>
                                    <div className={`project-template-info-content`}>
                                        <p className={`no-icon`}>{project.category}</p>
                                        <p><ProjectSurface surface={project.surface} black/></p>
                                        <p><ProjectDuration duration={project.duration} black/></p>
                                        <p><ProjectLocation location={project.location} black/></p>
                                        <p className={`no-icon`}>{project.getDateYear()}</p>
                                        <p className={`no-icon`}>Info 1</p>
                                        <p className={`no-icon`}>Info 2</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`project-template-gallery`}>
                                <div className={`project-template-gallery-images flex-row`} style={{ transform : `translateX(-${offset}px)` }}>
                                    {project.images.map((t, i) => <ProjectImage url={t.url} caption={t.caption} 
                                        setImageWidth={updateImageWidth(i)} 
                                        currentImageIndex={i} setCurrentImageIndex={setCurrentImageIndex}
                                        setFullScreenGalleryVisible={setFullScreenGalleryVisibile} />)}
                                </div>
                                <ProjectTemplateGalleryArrows currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} maxIndex={project.images.length - 1} />
                            </div>

                            <div className={`project-template-footer-container`}>
                                <Footer  launchPageTransition={props.launchPageTransition}/>
                            </div>

                            <ProjectFullScreenGallery visible={fullScreenGalleryVisibile} setVisible={setFullScreenGalleryVisibile}
                                images={project.images} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`project-template-cover ${isNavVisibleClassName}`}></div>
        </div>
    );
}

export default ProjectTemplate;