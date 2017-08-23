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

import { Menu, Breadcrumb, Icon } from 'antd';
require('./style/test.css');
const SubMenu = Menu.SubMenu;

const {Home} = require('./component/module');
const {User} = require('./component/user');

//import { IndexRoute } from 'react-router'
const{ Router, Route, IndexRoute, Link } = require('react-router');
const { render } = ReactDOM;

const Frame = React.createClass({
  getInitialState() {
    return {
      collapse: true,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Icon type="user" /><span className="nav-text">导航一</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" /><span className="nav-text">导航二</span>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" /><span className="nav-text">导航三</span>
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification" /><span className="nav-text">导航四</span>
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" /><span className="nav-text">导航五</span>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 220 }}>
                xx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xxxx
				xx
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render((
    <Router>
      <Route path="/" component={Frame}>
        <Route path="home" component={Home} />
        <Route path="user" component={User} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
