/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('es5-shim');
require('es5-shim/es5-sham');


/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

const {Home} = require('./component/module');
const {User} = require('./component/user');
const {HomePage} = require('./component/App');

//import { IndexRoute } from 'react-router'
const{ Router, Route, IndexRoute } = require('react-router');
const { render } = ReactDOM;

ReactDOM.render((
      <Router>
        <Route path="/" component={HomePage}>
          <Route path="home" component={Home} />
          <Route path="user" component={User} />
        </Route>
      </Router>
  ),
  document.getElementById('app')
);
