import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { ProjectCategory } from './model/Project';
import CompanyPage from './view/components/CompanyPage/CompanyPage';
import Home from './view/components/Home/Home';
import ProjectsPage from './view/components/Projects/ProjectsPage';
import ProjectTemplate from './view/components/Projects/ProjectTemplate/ProjectTemplate';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {   
    const [ activeCategory, setActiveCategory ] = useState(ProjectCategory.TOUS);

    return (
        <div className={`App`}>
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path={["/entreprise"]}>
                    <CompanyPage setActiveCategory={setActiveCategory}/>
                </Route>
                <Route exact path={["/projets"]}>
                    <ProjectsPage activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                </Route>
                <Route exact path={["/"]}>
                    <Home setActiveCategory={setActiveCategory}/>
                </Route>
                <Route path={["/projets/:projectId"]}>
                    <ProjectTemplate setActiveCategory={setActiveCategory}/>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
  )
}
export default App;
