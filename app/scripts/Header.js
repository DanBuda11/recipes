import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="nav">
				<Link to="/"><h1>Buda Fooda<i className="fa fa-cutlery" aria-hidden="true"></i></h1></Link>
			</div>
		);
	}
});