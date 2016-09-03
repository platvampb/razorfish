var React = require('react');
var ReactDom = require('react-dom');

var CardAction = require('./CardAction').default;

var CardActions = React.createClass({
	render: function() {
		var likedStyle = this.props.liked ? ' liked' : '';

		return (
			<div className="card-actions">
				<CardAction
					actionType={'posts'}
					actionStats={15}
				/>
				<CardAction
					actionType={'friends'}
					actionStats={42}
				/>
				<CardAction
					actionType={'likes'}
					actionStats={this.props.likes}
					moreClass={likedStyle}
					clickHandler={this.props.likeHandler}
				/>
			</div>
		);
	},

});

exports.default = CardActions;
