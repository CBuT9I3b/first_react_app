import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutUs, NotFound } from '..';
import { ListStories } from '../../containers';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={NotFound} />
    <Route path='/about' component={AboutUs} />
  </Switch>
)

const List = ({ match }) => (
  <ListStories type={match.params.type} />
)

export default Routes;
