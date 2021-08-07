import React from 'react';
import './ProjectTemplateGalleryArrows.scss';
import arrowPrevious from '../../../../../images/projects/arrow-left.png';
import arrowNext from '../../../../../images/projects/arrow-right.png';
import arrowPreviousWhite from '../../../../../images/projects/arrow-left-white.png';
import arrowNextWhite from '../../../../../images/projects/arrow-right-white.png';

interface IProjectTemplateGalleryArrowsProps {
    currentImageIndex : number;
    setCurrentImageIndex : React.Dispatch<React.SetStateAction<number>>;
    maxIndex : number;
    galleryFullScreen ?: boolean;
}

const ProjectTemplateGalleryArrows : React.FC<IProjectTemplateGalleryArrowsProps> = props => {
    const arrowNextSrc = props.galleryFullScreen ? arrowNextWhite : arrowNext;
    const arrowPreviousSrc = props.galleryFullScreen ? arrowPreviousWhite : arrowPrevious;
    const galleryFullScreenClassName = props.galleryFullScreen ? 'gallery-full-screen' : '';

    const onClickPrevious = () => {
        if (props.currentImageIndex !== 0) {
            props.setCurrentImageIndex(t => t - 1);
        }
    }

    const onClickNext = () => {
        if (props.currentImageIndex !== props.maxIndex) {
            props.setCurrentImageIndex(t => t + 1);
        }
    }

    const previousGreyedOutClassName = props.currentImageIndex === 0 ? 'greyed-out' : '';
    const nextGreyedOutClassName = props.currentImageIndex === props.maxIndex ? 'greyed-out' : '';

    return (
        <div className={`project-template-gallery-arrows ${galleryFullScreenClassName}`}>
            <img src={arrowPreviousSrc} alt='arrow previous' onClick={onClickPrevious} className={`${previousGreyedOutClassName}`} />
            <img src={arrowNextSrc} alt='arrow next' onClick={onClickNext} className={`${nextGreyedOutClassName}`} />
        </div>
    );
}

export default ProjectTemplateGalleryArrows;