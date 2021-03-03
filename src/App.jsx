import React from 'react';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
import Restaurants from './Restaurants';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">
            헤더
          </Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/restaurants" component={Restaurants} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
