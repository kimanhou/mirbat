import React, { useState } from 'react';
import './ProjectImage.scss';

interface IProjectImageProps {
    url : string;
    caption : string;
    setImageWidth : (width : number) => void;
}

const ProjectImage : React.FC<IProjectImageProps> = props => {
    const [width, setWidth] = useState(0);
    const onLoad : React.ReactEventHandler<HTMLImageElement> = e => {
        const width = e.currentTarget.getBoundingClientRect().width;
        props.setImageWidth(width);
        setWidth(width - 20);
    }

    return (
        <div className={`project-image`}>
            <div className={`hover-shadow`}></div>
            <img src={props.url} onLoad={onLoad}/>
            <div className={`text flex-column`} style={{ width: width }}>
                {props.caption}
            </div>
        </div>
    );
}

export default ProjectImage;