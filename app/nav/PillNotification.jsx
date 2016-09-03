require('../stylesheets/nav.scss');

var React = require('react');
var ReactDom = require('react-dom');

var PillNotification = React.createClass({
	render: function() {
		return (
				<span className="notifications">{this.props.stats}</span>
		);
	},
});

exports.default = PillNotification;
