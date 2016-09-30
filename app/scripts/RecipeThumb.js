import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<Link to="/recipe" className="col-4">
				<img src={this.props.image}></img>
				<p>{this.props.name}</p>
			</Link>
		);
	}
});