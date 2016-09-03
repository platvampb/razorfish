var React = require('react');
var ReactDom = require('react-dom');

var CardAction = React.createClass({
	getIconStyle: function() {
		var mapping = {
			'posts': 'fa-pencil-square fa-fw fa-lg',
			'friends': 'fa-users fa-fw',
			'likes': 'fa-thumbs-o-up fa-fw'
		};

		return "fa " + mapping[this.props.actionType];
	},

	render: function() {
		if (this.props.clickHandler)
			return (
				<div
					className={"card-action " + this.props.actionType + this.props.moreClass}
					onClick={this.props.clickHandler}
				>
					<i className={this.getIconStyle()}/>
					{this.props.actionStats}
				</div>
			);

		return (
			<div className={"card-action " + this.props.actionType}>
				<i className={this.getIconStyle()}/>
				{this.props.actionStats}
			</div>
		);
	},

});

exports.default = CardAction;
