import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ResidenceRegistration from '../pages/ResidenceRegistration';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cadastrar" component={ResidenceRegistration} />
  </Switch>
);

export default Routes;
