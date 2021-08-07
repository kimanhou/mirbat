import React, { useState } from 'react';
import ProjectImageModel from '../../../../../model/ProjectImage';
import './ProjectFullScreenGallery.scss';
import ProjectImage from './ProjectImage';
import ProjectTemplateGalleryArrows from './ProjectTemplateGalleryArrows';

interface IProjectFullScreenGalleryProps {
    visible : boolean;
    setVisible : (visible : boolean) => void;
    images : ProjectImageModel[];
    currentImageIndex : number;
    setCurrentImageIndex : React.Dispatch<React.SetStateAction<number>>;
}

const ProjectFullScreenGallery : React.FC<IProjectFullScreenGalleryProps> = props => {
    const visibleClassName = props.visible ? 'visible' : '';
    
    const [ imageWidths, setImageWidths ] = useState<number[]>(props.images.map(t => 0));
    const updateImageWidth = (i : number) => (width : number) => {
        setImageWidths(imageWidths => {
            const clone = [...imageWidths];
            clone[i] = width;
            return clone;
        });
    }

    const offset = imageWidths.slice(0, props.currentImageIndex).reduce((a,b) => a+b+20, 0);

    return (
        <div className={`project-full-screen-gallery ${visibleClassName}`}>
            <button className={`close-button`} onClick={() => props.setVisible(false)}>&#x2715;</button>
            <div className={`project-full-screen-gallery-images flex-row`} style={{transform : `translateX(-${offset}px)`}}>
                {props.images.map((t, i) => <ProjectImage url={t.url} caption={t.caption} setImageWidth={updateImageWidth(i)} isFullScreen />)}
            </div>
            <ProjectTemplateGalleryArrows currentImageIndex={props.currentImageIndex} setCurrentImageIndex={props.setCurrentImageIndex} maxIndex={props.images.length - 1} galleryFullScreen />
        </div>
    );
}

export default ProjectFullScreenGallery;