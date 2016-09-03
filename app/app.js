'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var Main = require('./main').default;

ReactDom.render(
	<Main/>,
	document.getElementById("react")
);
