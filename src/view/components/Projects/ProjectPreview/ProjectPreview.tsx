import React from 'react';
import BackgroundOnHover from '../../Navigation/LinkWithBackground/BackgroundOnHover';
import './ProjectPreview.scss';

interface IProjectPreviewProps {
    backgroundImageUrl : string;
}

const ProjectPreview : React.FC<IProjectPreviewProps> = props => {
    return (
        <div className={`project-preview`} style={{ backgroundImage: `url(${props.backgroundImageUrl})` }}>
            <div className={`hover-shadow`}></div>
            <div className={`read-more`}>
                Découvrir
                <BackgroundOnHover className={`read-more-background`} />
            </div>
        </div>
    );
}

export default ProjectPreview;