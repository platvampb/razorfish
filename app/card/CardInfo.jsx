var React = require('react');
var ReactDom = require('react-dom');

var CardInfo = React.createClass({
	render: function() {
		return (
			<div className="card-info">
				<div className="avatar-wrapper">
					<img src={'2.jpeg'} alt="Avatar"/>
				</div>
				<div className="info-wrapper">
					<div className="full-name">
						John Raymons
					</div>
					<div className="summary">
						<p>Your talent amazes! This is awesome. Excited to see the final product.</p>
					</div>
				</div>
			</div>
		);
	},

});

exports.default = CardInfo;
