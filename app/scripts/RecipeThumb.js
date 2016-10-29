import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<Link to={`/${this.props.id}/recipe`} className="col-4">
				<div className="thumbContainer">
					<img src={require("./../images/" + this.props.image)} />
					<p className="recipeTitle">{this.props.name}</p>
					<p className="recipeCourse">{this.props.course}</p>
				</div>
			</Link>
		);
	}
	// goDetails: function() {
	// 	browserHistory.push(`/${this.props.id}/recipe`);
	// }
});