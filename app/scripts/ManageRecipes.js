import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Link className="homeLink" to ="/account"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
Home</Link>
				<h1>Manage My Recipes</h1>
			</div>
		);
	}
});