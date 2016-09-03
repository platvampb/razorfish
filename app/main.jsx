require('./stylesheets/home.scss');

var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./nav/NavBar').default;
var Card = require('./card/Card').default;

var main = React.createClass({
	render: function() {
		return (
			<div>
				<NavBar/>
				<Card/>
			</div>
		);
	}
});

exports.default = main;
