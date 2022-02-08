import React, { useState } from 'react';
import { useIsMobile } from '../../../hooks/UseMediaQuery';
import FadeIn from '../../FadeIn/FadeIn';
import SectionTitle from '../../Page/SectionTitle';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import './Contact.scss';

const Contact : React.FC = props => {
    const [active, setActive] = useState(false);
    const activeClassName = active ? 'active' : '';

    const isMobile = useIsMobile();
    
    return (
        <FadeIn className={`home-contact ${activeClassName}`} id='contact'>
            <div className={`home-contact-background`}></div>
            <div className={`home-contact-content`}>
            <ScreenDetector onActive={() => setActive(true)} onUnactive={() => setActive(false)} />
                <SectionTitle title='Nous contacter' active={active}/>
                {!isMobile && <table className={`home-contact-table`}>
                    <tbody>
                        <tr>
                            <td className={`align-right`}>EMAIL</td>
                            <td className={`home-contact-big align-left`}><a href='mailto:contact@mirbat.net' className={`home-contact-big`}>contact@mirbat.net</a></td>
                        </tr>
                        <tr>
                            <td className={`align-right`}>TÉLÉPHONE</td>
                            <td className={`home-contact-big align-left`}>
                                <a href='tel:0699193472'>06 99 19 34 72</a>
                                <br></br>
                                <a href='tel:0169218977'>01 69 21 89 77</a>
                            </td>
                        </tr>
                        <tr>
                            <td className={`align-right`}>ADRESSE</td>
                            <td className={`home-contact-big align-left`}>
                                <a href='https://goo.gl/maps/48uvUGYAq1LVkuZ28' target='_blank'>39 avenue Jean-Pierre Bénard
                                <br></br>
                                91200 Athis-Mons</a>
                            </td>
                        </tr>
                    </tbody>
                </table>}

                {isMobile && 
                    <div className={`home-contact-mobile`}>
                        EMAIL 
                        <br></br>
                        <a href='mailto:contact@mirbat.net' className={`home-contact-mobile-big`}>contact@mirbat.net</a>

                        <br></br><br></br>
                        TÉLÉPHONE 
                        <br></br>
                        <a href='tel:0699193472' className='home-contact-mobile-big'>06 99 19 34 72</a>
                        <br></br>
                        <a href='tel:0169218977' className='home-contact-mobile-big'>01 69 21 89 77</a>

                        <br></br><br></br>
                        ADRESSE 
                        <br></br>
                        <a href='https://goo.gl/maps/48uvUGYAq1LVkuZ28' target='_blank' className='home-contact-mobile-big'>39 avenue Jean-Pierre Bénard
                        <br></br>
                        91200 Athis-Mons</a>
                    </div>}
            </div>
        </FadeIn>
    );
}

export default Contact;