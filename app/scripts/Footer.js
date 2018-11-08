import React from 'react';

export default React.createClass({
  render: function() {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div className="footer">
        <p>
          A <a href="https://danbuda.com/">Dan Buda</a> Joint
        </p>
      </div>
    );
  },
});
