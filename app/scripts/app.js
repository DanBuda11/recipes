import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<Header />
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});