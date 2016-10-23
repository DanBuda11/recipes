import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="loginPage">
				<Link className="homeLink" to ="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
Home</Link>
				<form>
					<input type="text" placeholder="me@email.com" />
					<input type="text" placeholder="******" />
					<button type="submit" className="button">Login</button>
				</form>
			</div>
		);
	}
});