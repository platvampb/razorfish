require('../stylesheets/nav.scss');

var React = require('react');
var ReactDom = require('react-dom');

var NavPill = require('./NavPill').default;
var HamburgerPill = require('./HamburgerPill').default;

var NavBar = React.createClass({
	getInitialState: function(){
		return {
			menuExpanded: false,
			checkIns: 3
		};
	},

	handleMenuToggle: function() {
		this.setState({menuExpanded: !this.state.menuExpanded});
	},

	render: function() {
		var ulClass = 'nav' + (this.state.menuExpanded ? ' nav-expanded' : '');
		return (
			<div className="nav-wrapper">
			<ul className={ulClass}>
				<HamburgerPill
					handleClick={this.handleMenuToggle}
				/>
				<NavPill
					pillType={'check in'}
					stats={this.state.checkIns}
				/>
				<NavPill
					pillType={'events'}
				/>
				<NavPill
					pillType={'account'}
				/>
				<NavPill
					pillType={'settings'}
				/>
			</ul>
			</div>
		);
	},

});

exports.default = NavBar;
