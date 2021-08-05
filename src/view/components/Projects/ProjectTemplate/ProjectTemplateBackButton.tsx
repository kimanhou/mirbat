import React from 'react';
import LinkWithBackground from '../../Navigation/LinkWithBackground/LinkWithBackground';

interface IProjectTemplateBackButtonProps {
    launchPageTransition : () => void;
}

const ProjectTemplateBackButton : React.FC<IProjectTemplateBackButtonProps> = props => {
    return (
        <LinkWithBackground className={`project-template-back-button uppercase`} to='/projets' launchPageTransition={props.launchPageTransition}>
            &lt; &nbsp; Retour
        </LinkWithBackground>
    );
}

export default ProjectTemplateBackButton;