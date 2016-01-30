require('./stylesheets/home.scss');

import React from 'react';
import { render } from 'react-dom';
import { Link, Route, Router } from 'react-router';

import HelloHandler from './components/Hello.js';

let App = React.createClass({
	render: function() {
		return (
			<div className="nav">
			<Link to="app">Home</Link>
			<Link to="hello">Hello</Link>

			{this.props.children}
			</div>
		);
	}
});

let routes = (
	<Router>
		<Route name="app" path="/" component={App}>
			<Route name="hello" path="/hello" component={HelloHandler}/>
		</Route>
	</Router>
);

render(routes, document.body);
