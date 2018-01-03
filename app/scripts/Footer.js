import React from 'react';

export default React.createClass({
	render: function() {
		const today = new Date();
		const year = today.getFullYear();
		return (
			<div className="footer">
				<p>&copy;2017-{year} Dan Buda</p>
			</div>
		);
	}
});