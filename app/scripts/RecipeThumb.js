import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <Link to={`/${this.props.id}/recipe`} className="col-4">
        <div className="thumbContainer">
          <img src={require('./../images/' + this.props.image)} alt={this.props.name}/>
          <p className="recipeTitle">{this.props.name}</p>
          <p className="recipeCourse">{this.props.course}</p>
        </div>
      </Link>
    );
  },
});
