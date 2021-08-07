import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { ProjectCategory } from './model/Project';
import CompanyPage from './view/components/CompanyPage/CompanyPage';
import Home from './view/components/Home/Home';
import Intro from './view/components/Home/Intro/Intro';
import ProjectsPage from './view/components/Projects/ProjectsPage';
import ProjectTemplate from './view/components/Projects/ProjectTemplate/ProjectTemplate';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {   
    const [ activeCategory, setActiveCategory ] = useState(ProjectCategory.TOUS);

    const [ transitionClassName, setTransitionClassName ] = useState('');

    const launchTransition = () => {
        setTransitionClassName('center');
        setTimeout(() => {
            setTransitionClassName('left')
        }, 1000);
        setTimeout(() => {
            setTransitionClassName('');
        }, 2000);
    }
    
    const [ introVisible, setIntroVisible ] = useState(true);
    
    return (
        <div className={`App`}>
        <HashRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path={["/entreprise"]}>
                    <CompanyPage setActiveCategory={setActiveCategory} launchPageTransition={launchTransition} />
                </Route>
                <Route exact path={["/projets"]}>
                    <ProjectsPage activeCategory={activeCategory} setActiveCategory={setActiveCategory} launchPageTransition={launchTransition} />
                </Route>
                <Route exact path={["/"]}>
                    <Home setActiveCategory={setActiveCategory} launchPageTransition={launchTransition}/>
                </Route>
                <Route path={["/projets/:projectId"]}>
                    <ProjectTemplate setActiveCategory={setActiveCategory} launchPageTransition={launchTransition} />
                </Route>
            </Switch>
        </HashRouter>
        <div className={`transition-layer ${transitionClassName}`}>
            <div className={`transition-layer-color black`}></div>
            <div className={`transition-layer-color white`}></div>
            <div className={`transition-layer-logo flex-row`}>
                MirBat.
            </div>
        </div>
        <Intro visible={introVisible} setVisible={setIntroVisible} />
        </div>
  )
}
export default App;
