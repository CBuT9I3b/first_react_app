import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListNews, AboutUs } from '..';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ListNews} />
    <Route exact path='/favorites_news' component={ListNews} />
    <Route path='/about_us' component={AboutUs} />
  </Switch>
);

export default Routes;
