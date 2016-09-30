import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Link to ="/">Home</Link>
				<p>Recipe info will show up here</p>
			</div>
		);
	}
});