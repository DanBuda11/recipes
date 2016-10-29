import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div className="page-wrap">
					<Header />
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});