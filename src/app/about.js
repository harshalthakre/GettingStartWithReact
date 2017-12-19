var React=require('react');
//var Link = require('react-router').Link;
import {Link} from 'react-router';

var About=React.createClass({
  render: function(){
    return(
      <div>
      <Link to={'/'}>Home</Link>
      <h1>Its Al about mE</h1>
      </div>
    );
  }
});

module.exports=About;
