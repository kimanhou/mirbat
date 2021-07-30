import React, { useState } from 'react';
import Project from '../../../../model/Project';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navigation from '../../Navigation/Navigation';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ProjectDuration from '../ProjectPreview/ProjectInfo/ProjectDuration';
import ProjectLocation from '../ProjectPreview/ProjectInfo/ProjectLocation';
import ProjectSurface from '../ProjectPreview/ProjectInfo/ProjectSurface';
import './ProjectTemplate.scss';
import arrowNext from '../../../../images/projects/arrow-right.png';
import arrowPrevious from '../../../../images/projects/arrow-left.png';
import ProjectImage from './ProjectImage';

interface IProjectTemplateProps {
    project : Project;
}

const ProjectTemplate : React.FC<IProjectTemplateProps> = props => {
    const [ isNavVisible, setIsNavVisible ] = useState(false);
    const isNavVisibleClassName = isNavVisible ? 'nav-visible' : '';

    const [ imageWidths, setImageWidths ] = useState<number[]>(props.project.images.map(t => 0));
    const updateImageWidth = (i : number) => (width : number) => {
        setImageWidths(imageWidths => {
            const clone = [...imageWidths];
            clone[i] = width;
            return clone;
        });
    }

    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
    const onClickPrevious = () => {
        if (currentImageIndex !== 0) {
            setCurrentImageIndex(t => t - 1);
        }
    }

    const onClickNext = () => {
        if (currentImageIndex !== props.project.images.length - 1) {
            setCurrentImageIndex(t => t + 1);
        }
    }

    const offset = imageWidths.slice(0, currentImageIndex).reduce((a,b) => a+b+20, 0);
    const previousGreyedOutClassName = currentImageIndex === 0 ? 'greyed-out' : '';
    const nextGreyedOutClassName = currentImageIndex === props.project.images.length - 1 ? 'greyed-out' : '';

    return (
        <div className={`project-template`}>
            <div className={`project-template-wrapper`}>
                <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
                <Navigation isVisible={isNavVisible} setIsVisible={setIsNavVisible} />
                <div className={`content`}>
                    <div className={`content-moving ${isNavVisibleClassName}`}>
                        <Header isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} iswhite />
                        <div className={`project-template-content`}>
                            <div className={`project-template-title`}>
                                <div className={`project-template-title-container`}>
                                    {props.project.date} - {props.project.location}
                                    <div className={`underlines`}>
                                        <div className={`thin-underline`}></div>
                                        <div className={`thick-underline`}></div>
                                    </div>
                                    <div className={`project-title`}>
                                        {props.project.title}
                                    </div>  
                                </div>
                            </div>

                            <div className={`project-template-details flex-row`}>
                                <div className={`project-template-description flex-1`}>
                                    <p>
                                        <b>
                                            {props.project.descriptionIntro}
                                        </b>
                                    </p>
                                    <p>
                                        {props.project.description}
                                    </p>
                                </div>
                                <div className={`project-template-info`}>
                                    <div className={`thick-underline`}></div>
                                    <div className={`project-template-info-content`}>
                                        <p className={`no-icon`}>{props.project.category}</p>
                                        <p><ProjectSurface surface={props.project.surface} black/></p>
                                        <p><ProjectDuration duration={props.project.duration} black/></p>
                                        <p><ProjectLocation location={props.project.location} black/></p>
                                        <p className={`no-icon`}>{props.project.date}</p>
                                        <p className={`no-icon`}>Info 1</p>
                                        <p className={`no-icon`}>Info 2</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`project-template-gallery`}>
                                <div className={`project-template-gallery-images flex-row`} style={{
                                    transform : `translateX(-${offset}px)`
                                }}>
                                    {props.project.images.map((t, i) => <ProjectImage url={t.url} setImageWidth={updateImageWidth(i)} />)}
                                </div>
                                <div className={`project-template-gallery-arrows`}>
                                    <img src={arrowPrevious} alt='arrow previous' onClick={onClickPrevious} className={`${previousGreyedOutClassName}`} />
                                    <img src={arrowNext} alt='arrow next' onClick={onClickNext} className={`${nextGreyedOutClassName}`} />
                                </div>
                            </div>

                            <div className={`project-template-footer-container`}>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`project-template-cover ${isNavVisibleClassName}`}></div>
        </div>
    );
}

export default ProjectTemplate;