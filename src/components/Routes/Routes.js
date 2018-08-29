import React from 'react';
import { Route } from 'react-router-dom';
import { ListNews, AboutUs } from '..';

const Routes = () => (
  <div>
    <Route exact path='/' component={ListNews} />
    <Route path='/about_us' component={AboutUs} />
  </div>
);

export default Routes;
