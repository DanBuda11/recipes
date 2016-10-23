import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="myAccount">
				<Link className="homeLink" to="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
Home</Link>
				<Link className="button" to="/edit-profile">Edit Profile</Link>
				<Link className="button" to="/manage-recipes">Manage My Recipes</Link>
				<button className="button">Logout</button>

			</div>
		);
	}
});