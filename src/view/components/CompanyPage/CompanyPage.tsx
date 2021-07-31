import React, { useState } from 'react';
import FadeIn from '../FadeIn/FadeIn';
import PictureReveal from '../Home/PictureReveal/PictureReveal';
import Page from '../Page/Page';
import SectionTitle from '../Page/SectionTitle';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './CompanyPage.scss';
import company1 from '../../../images/company/company-1.jpg';
import company2 from '../../../images/company/company-2.jpg';
import { ProjectCategory } from '../../../model/Project';

interface ICompanyPageProps {
    setActiveCategory : (activeCategory : ProjectCategory) => void;
}

const CompanyPage : React.FC<ICompanyPageProps> = props => {
    const [ isTeamActive, setIsTeamActive ] = useState(false);
    const isTeamActiveClassName = isTeamActive ? 'active' : '';

    const [ isValuesActive, setIsValuesActive ] = useState(false);
    const isValuesActiveClassName = isValuesActive ? 'active' : '';
    
    return (
        <Page className={`notre-entreprise-page`} title='Notre entreprise' setActiveCategory={props.setActiveCategory}>
            <p><b>
                Pellentesque euismod pulvinar lacus, id pulvinar elit gravida quis. 
                Nulla semper tellus congue nulla semper faucibus. Aenean id nunc dolor.
            </b></p>
            <p>
                In placerat ex vitae mauris hendrerit, in pellentesque leo accumsan. 
                Morbi vitae dignissim diam. 
                Morbi ac sollicitudin lacus, sed consequat ipsum. 
                In vulputate, enim eu consectetur semper, libero tellus sodales mi, non placerat leo ante eu ipsum. 
                Donec imperdiet eu sapien id interdum.
            </p>

            <FadeIn className={`team ${isTeamActiveClassName} section`} id='equipe'>
                <ScreenDetector className={`team-screen-detector`} onActive={() => setIsTeamActive(true)} onUnactive={() => setIsTeamActive(false)}/>
                <div className={`flex-row`}>
                    <div className={`left flex-1`}>
                        <PictureReveal active={isTeamActive} className={`picture-one-container`} delay='0.6s' backgroundImageUrl={company1} />
                    </div>
                    <div className={`right flex-1 team-content`}>
                        <SectionTitle title='Notre équipe' active={isTeamActive}/>
                        <span className={`highlighted-char`}>D</span>onec consectetur dignissim orci, at fermentum neque facilisis eget. 
                        Aenean vitae eleifend velit. Nam hendrerit justo hendrerit metus accumsan, a viverra nulla molestie. 
                        Praesent vel malesuada felis. Nullam ac diam ex. In ac volutpat lacus, ac porttitor felis. 
                        Duis eget tortor at libero posuere mattis.
                    </div>
                </div>
                
                
            </FadeIn>

            <FadeIn className={`values ${isValuesActiveClassName} section`} id={`valeurs`}>
                <ScreenDetector className={`values-screen-detector`} onActive={() => setIsValuesActive(true)} onUnactive={() => setIsValuesActive(false)}/>
                <div className={`flex-row`}>
                    <div className={`left flex-1 values-content`}>
                        <SectionTitle title='Nos valeurs' active={isValuesActive}/>
                        <span className={`highlighted-char`}>D</span>onec pulvinar fringilla ultricies. 
                        Integer euismod nisi velit, sit amet euismod diam suscipit et. Phasellus id tellus turpis. 
                        Ut at dolor at eros maximus blandit. Quisque rhoncus lorem et justo euismod euismod. 
                        Phasellus blandit tempus porta. Duis vitae sagittis massa. 
                        Proin volutpat metus non elit elementum, at viverra nunc efficitur.
                    </div>
                    <div className={`right flex-1`}>
                        <PictureReveal active={isValuesActive} className={`picture-two-container`} delay='0.6s' backgroundImageUrl={company2} />
                    </div>
                </div>
            </FadeIn>
        </Page>
    );
}

export default CompanyPage;