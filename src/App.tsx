import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route path={route.path} key={route.path} component={route.component} exact />
      ))}
      <Redirect from="/" to="/gists" />
      <Redirect to="/gists" />
    </Switch>
  </BrowserRouter>
);

export default App;
