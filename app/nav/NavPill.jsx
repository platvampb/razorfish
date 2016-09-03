var React = require('react');
var ReactDom = require('react-dom');

var PillNotification = require('./PillNotification').default;

var NavPill = React.createClass({
	getIconStyle: function() {
		var mapping = {
			'check in': 'fa-map-marker fa-lg',
			'events': 'fa-heart fa-lg',
			'account': 'fa-user fa-lg',
			'settings': 'fa-cog fa-lg'
		};

		return "fa " + mapping[this.props.pillType];
	},

	render: function() {
		var notifications = function(stats) {
			if (stats)
				return (
					<PillNotification stats={stats}/>
				);

			return '';
		};

		return (
				<li><a>
					<i className={this.getIconStyle()} ariaHidden="true"/>
					{this.props.pillType.toUpperCase()}
					{notifications(this.props.stats)}
				</a></li>
		);
	}
});

exports.default = NavPill;
