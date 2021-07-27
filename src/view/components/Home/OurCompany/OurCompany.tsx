import React, { useState } from 'react';
import Text from '../../../../model/Text';
import FadeIn from '../../FadeIn/FadeIn';
import LinkWithBackground from '../../Navigation/LinkWithBackground/LinkWithBackground';
import NavigationLink from '../../Navigation/NavigationLink';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import PictureReveal from '../PictureReveal/PictureReveal';
import './OurCompany.scss';
import entreprise1 from '../../../../images/home/entreprise-1.jpg';
import entreprise2 from '../../../../images/home/entreprise-2.jpg';
import entreprise3 from '../../../../images/home/entreprise-3.jpg';

const OurCompany : React.FC = props => {
    const [active, setActive] = useState(false);
    
    return (
        <FadeIn className={`notre-entreprise flex-row`}>
            <ScreenDetector onActive={() => setActive(true)} onUnactive={() => setActive(false)} />
            <div className={`half left flex-row`}>
                <div className={`picture one flex-1 flex-row`}>
                    <PictureReveal active={active} className={`picture-one-container`} delay='1s' backgroundImageUrl={entreprise1} />
                </div>
                <div className={`flex-column flex-1`}>
                    <div className={`picture two flex-1 flex-column`}>
                        <PictureReveal active={active} className={`picture-two-container`} delay='1.2s' backgroundImageUrl={entreprise2} />
                    </div>
                    <div className={`picture three flex-1`}>
                        <PictureReveal active={active} className={`picture-three-container`} delay='1.4s' backgroundImageUrl={entreprise3} />
                    </div>
                </div>
            </div>
            <div className={`half right`}>
                <NavigationLink text={new Text('Notre entreprise', 'Notre entreprise')} to='/entreprise' isVisible={true} setIsVisible={() => {}} transitionDelay='0s' />
                <div className={`notre-entreprise-text`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse egestas non dui quis tincidunt. 
                    Suspendisse faucibus dolor nec mi dictum, porttitor maximus tellus fermentum. 
                    Ut interdum tortor aliquet diam lacinia scelerisque. 
                    Aenean non quam vel augue rhoncus porttitor hendrerit vel diam. 
                    Mauris dignissim nunc ac finibus luctus. 
                    Aliquam molestie faucibus augue vitae ullamcorper.
                </div>
                <div className={`en-savoir-plus-container flex-row`}>
                    <LinkWithBackground className={`en-savoir-plus`} to='/entreprise'>
                        En savoir plus
                    </LinkWithBackground>
                </div>
            </div>
        </FadeIn>
    );
}

export default OurCompany;