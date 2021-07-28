import React from 'react';
import { BrowserRouter, HashRouter, Route, Router, Switch } from 'react-router-dom';
import './App.scss';
import CompanyPage from './view/components/CompanyPage/CompanyPage';
import Home from './view/components/Home/Home';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <BrowserRouter>
                <LocalContext>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path={["/entreprise"]}>
                            <CompanyPage />
                        </Route>
                        <Route exact path={["/contact"]}>
                            {/* <Contact /> */}
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
