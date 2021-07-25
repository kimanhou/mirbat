import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './view/components/Home/Home';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <HashRouter>
                <LocalContext>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path={["/about"]}>
                            {/* <About /> */}
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
            </HashRouter>
    </div>
  )
}
export default App;
