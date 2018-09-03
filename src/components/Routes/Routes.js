import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListNews, AboutUs } from '..';

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => <ListNews type={'hacker'} />} />
    <Route exact path='/favorites_news' render={() => <ListNews type={'fav'} />} />
    <Route path='/about_us' component={AboutUs} />
  </Switch>
);

export default Routes;
