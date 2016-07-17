var React = require('react');
var Navbar = require('./Navbar');

function MainContainer (props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
