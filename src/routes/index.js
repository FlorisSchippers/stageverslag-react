import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import AppContainer from '../components/App/Container';
import LandingPage from '../Pages/landing';
import PrivacyPage from '../Pages/privacy';
import TermsPage from '../Pages/terms';
import VideoPage from '../Pages/video';
import appVars from '../config/appVars';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LandingPage}/>
    <Route path={appVars.routes.privacy} component={PrivacyPage}/>
    <Route path={appVars.routes.terms} component={TermsPage}/>
    <Route path={appVars.routes.video} component={VideoPage}/>
  </Route>
);

export default routes;
