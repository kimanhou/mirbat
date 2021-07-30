import React from 'react';
import './ProjectImage.scss';

interface IProjectImageProps {
    url : string;
    setImageWidth : (width : number) => void;
}

const ProjectImage : React.FC<IProjectImageProps> = props => {
    const onLoad : React.ReactEventHandler<HTMLImageElement> = e => {
        props.setImageWidth(e.currentTarget.getBoundingClientRect().width);
    }

    return (
        <div className={`project-image`}>
            <img src={props.url} onLoad={onLoad}/>
        </div>
    );
}

export default ProjectImage;