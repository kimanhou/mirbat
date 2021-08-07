import React, { useState } from 'react';
import './ProjectImage.scss';

interface IProjectImageProps {
    url : string;
    caption : string;
    setImageWidth : (width : number) => void;
    isFullScreen ?: boolean;
    setFullScreenGalleryVisible ?: (visible : boolean) => void;
    currentImageIndex ?: number;
    setCurrentImageIndex ?: (currentIndex : number) => void;
}

const ProjectImage : React.FC<IProjectImageProps> = props => {
    const fullScreenClassName = props.isFullScreen ? 'full-screen' : '';
    const [width, setWidth] = useState(0);
    const onLoad : React.ReactEventHandler<HTMLImageElement> = e => {
        const width = e.currentTarget.getBoundingClientRect().width;
        props.setImageWidth(width);
        setWidth(width - 20);
    }

    const onClick = () => {
        if (props.setFullScreenGalleryVisible !== undefined) {
            props.setFullScreenGalleryVisible(true);
            if (props.setCurrentImageIndex !== undefined && props.currentImageIndex !== undefined) {
                props.setCurrentImageIndex(props.currentImageIndex);
            }
        }
    }

    return (
        <div className={`project-image ${fullScreenClassName}`} onClick={onClick}>
            <div className={`hover-shadow`}></div>
            <img src={props.url} onLoad={onLoad} alt={props.caption}/>
            <div className={`text flex-column`} style={{ width: width }}>
                {props.caption}
            </div>
        </div>
    );
}

export default ProjectImage;