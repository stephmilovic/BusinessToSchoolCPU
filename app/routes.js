import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Container';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew/';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import HeaderWhite from './components/HeaderWhite';
import HeaderBlue from './components/HeaderBlue';
import HeaderGreen from './components/HeaderGreen';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={{main: Home, header: HeaderWhite}} />
    <Route path="posts/new" component={{main: PostsNew, header: HeaderBlue}} />
    <Route path="posts" component={{main: PostsIndex, header: HeaderGreen}} />
    <Route path="about" component={{main: About, header: HeaderBlue}} />
    <Route path="contact" component={{main: Contact, header: HeaderGreen}} />
  </Route>
);
