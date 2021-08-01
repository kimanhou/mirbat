import React from 'react';
import LinkWithBackground from '../../Navigation/LinkWithBackground/LinkWithBackground';

interface IProjectTemplateBackButtonProps {

}

const ProjectTemplateBackButton : React.FC<IProjectTemplateBackButtonProps> = props => {
    return (
        <LinkWithBackground className={`project-template-back-button uppercase`} to='/projets' >
            &lt; &nbsp; Retour
        </LinkWithBackground>
    );
}

export default ProjectTemplateBackButton;