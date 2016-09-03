var React = require('react');
var ReactDom = require('react-dom');

var HamburgerPill = React.createClass({
	render: function() {
		return (
			<li className="icon"
				onClick={this.props.handleClick}
			>
				<a>☰</a>
			</li>
		);
	}
});

exports.default = HamburgerPill;
