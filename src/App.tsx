import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Project, { ProjectCategory } from './model/Project';
import ProjectImage from './model/ProjectImage';
import CompanyPage from './view/components/CompanyPage/CompanyPage';
import Home from './view/components/Home/Home';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import ProjectsPage from './view/components/Projects/ProjectsPage';
import ProjectTemplate from './view/components/Projects/ProjectTemplate/ProjectTemplate';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';
import projectTemplate1 from './images/projects/04/project-template-1.jpg';
import projectTemplate2 from './images/projects/04/project-template-2.jpg';
import projectTemplate3 from './images/projects/04/project-template-3.jpg';
import projectTemplate4 from './images/projects/04/project-template-4.jpg';

const App : React.FunctionComponent = props => {
    
    const descriptionIntro = 'Aenean tellus odio, posuere at erat ut, rhoncus maximus turpis. In hendrerit pretium dui vel eleifend. Proin molestie massa in ipsum pretium volutpat sodales pellentesque nisl. In placerat ex vitae mauris hendrerit, in pellentesque leo accumsan.';
    const description = 'Morbi vitae dignissim diam. Morbi ac sollicitudin lacus, sed consequat ipsum. In vulputate, enim eu consectetur semper, libero tellus sodales mi, non placerat leo ante eu ipsum. Donec imperdiet eu sapien id interdum. Pellentesque euismod pulvinar lacus, id pulvinar elit gravida quis. Nulla semper tellus congue nulla semper faucibus. Aenean id nunc dolor. Donec consectetur dignissim orci, at fermentum neque facilisis eget. Aenean vitae eleifend velit. Nam hendrerit justo hendrerit metus accumsan, a viverra nulla molestie. Praesent vel malesuada felis. Nullam ac diam ex. In ac volutpat lacus, ac porttitor felis. Duis eget tortor at libero posuere mattis. Donec pulvinar fringilla ultricies. Integer euismod nisi velit, sit amet euismod diam suscipit et. Phasellus id tellus turpis. Ut at dolor at eros maximus blandit. Quisque rhoncus lorem et justo euismod euismod. Phasellus blandit tempus porta. Duis vitae sagittis massa. Proin volutpat metus non elit elementum, at viverra nunc efficitur. Nulla et tempus arcu, ac vestibulum massa. Nunc lacinia, libero quis tincidunt ullamcorper, arcu erat scelerisque elit, nec lacinia lectus massa sit amet nisi.';
        
    return (
        <div className={`App`}>
        <BrowserRouter>
                    <LocalContext>
                        <ScrollToTop />
                        <Switch>
                            <Route exact path={["/entreprise"]}>
                                <CompanyPage />
                            </Route>
                            <Route exact path={["/projets"]}>
                                {/* <ProjectsPage /> */}
                                <ProjectTemplate project={new Project('Crèche Faure', ProjectCategory.EQUIPEMENTS, '180 m²', '4 mois', 'Paris 15e', '2020', descriptionIntro, description, [ new ProjectImage(projectTemplate1, ''), new ProjectImage(projectTemplate2, ''), new ProjectImage(projectTemplate3, ''), new ProjectImage(projectTemplate4, '') ])} />
                            </Route>
                            <Route exact path={["/"]}>
                                <Home />
                            </Route>
                            {/* <Route path={["/posts/:postId"]}>
                                <PostRoot />
                            </Route> */}
                        </Switch>
                    </LocalContext>
                </BrowserRouter>
        </div>
  )
}
export default App;
