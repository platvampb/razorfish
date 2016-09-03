require('../stylesheets/card.scss');

var React = require('react');
var ReactDom = require('react-dom');
var CardInfo = require('./CardInfo').default;
var CardActions = require('./CardActions').default;

var Card = React.createClass({
	getInitialState: function(){
		return {
			likes: 209,
			liked: false
		};
	},

	toggleLike: function() {
		var liked = !this.state.liked;

		this.setState({
			likes: this.state.likes + (liked ? 1 : -1),
			liked: liked
		});
	},

	render: function() {
		var likedStyle = this.state.liked ? ' liked' : '';

		return (
			<div className="card-wrapper">
			<div className="card">
				<div className="image-wrapper">
					<img src={'1.jpeg'} alt="A cabin in the woods"/>
				</div>
				<CardInfo/>
				<CardActions
					liked={this.state.liked}
					likes={this.state.likes}
					likeHandler={this.toggleLike}
				/>
			</div>
			</div>
		);
	},

});

exports.default = Card;
