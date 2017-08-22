/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

//import Home from './component/module';
const {Home} = require('./component/module');
const {User} = require('./component/user');

//import { IndexRoute } from 'react-router'
const{ Router, Route, IndexRoute, Link } = require('react-router');
const { render } = ReactDOM;

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/user">user</Link></li>
        </ul>

        {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="user" component={User} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
