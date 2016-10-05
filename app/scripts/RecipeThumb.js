import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div onClick={this.goDetails} className="col-4">
				<img src={require("./../images/" + this.props.image)} />
				<p className="recipeTitle">{this.props.name}</p>
			</div>
		);
	},
	goDetails: function() {
		browserHistory.push(`/${this.props.id}/recipe`);
	}
});