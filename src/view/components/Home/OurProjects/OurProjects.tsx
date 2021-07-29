import React from 'react';
import Text from '../../../../model/Text';
import FadeIn from '../../FadeIn/FadeIn';
import LinkWithBackground from '../../Navigation/LinkWithBackground/LinkWithBackground';
import NavigationLink from '../../Navigation/NavigationLink';
import ProjectPreview from '../../Projects/ProjectPreview/ProjectPreview';
import './OurProjects.scss';
import Project from '../../../../model/Project';

const OurProjects : React.FC = props => {
    const projects = Project.getAllProjects();
    const lastProjects = projects.slice(0, 3);

    return (
        <FadeIn className={`home-nos-projets flex-row`}>
            <div className={`left`}>
                <NavigationLink text={new Text('Nos projets', 'Nos projets')} to='/projets' isVisible={true} setIsVisible={() => {}} transitionDelay='0s' />
                    <div className={`nos-projets-text`}>
                        <span className={`highlighted-char`}>D</span>uis a tortor venenatis, pellentesque velit ut, convallis sem. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Fusce et lectus elementum, laoreet lorem vel, maximus nunc. 
                        Aenean ultricies augue quis euismod porta. 
                        Suspendisse eu laoreet magna. 
                        Nulla nibh velit, semper eget molestie eget, accumsan ut felis. 
                        Cras ac enim sed libero volutpat laoreet non quis nisl. 
                        Donec id mattis nisl. 
                        Suspendisse placerat, felis non aliquam imperdiet, odio mauris tincidunt eros, mollis luctus leo arcu a mauris. 
                        Integer scelerisque libero eu ultricies lacinia. 
                        Pellentesque tempus ut nibh eget ullamcorper.
                    </div>
                    <div className={`voir-projets-container flex-row`}>
                        <LinkWithBackground className={`voir-projets`} to='/projets'>
                            Voir tous les projets
                        </LinkWithBackground>
                    </div>
            </div>
            <div className={`right flex-row`}>
                {lastProjects.map(t => <ProjectPreview project={t} />)}
            </div>
        </FadeIn>
    );
}

export default OurProjects;