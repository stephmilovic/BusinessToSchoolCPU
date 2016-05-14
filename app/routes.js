import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Container';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew/';
import Home from './components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts" component={PostsIndex} />
  </Route>
);
