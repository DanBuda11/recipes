import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Recipes from './Recipes';

export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  },
});
