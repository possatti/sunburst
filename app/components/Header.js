var React = require('react');
var PropTypes = React.PropTypes;

function Header (props) {
  return (
    <div id="header">
      <h1 id="location-title" className="text-center">{props.location}</h1>
      {props.date && <h2 id="date-title" className="text-center">{props.date}</h2>}
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string,
}

module.exports = Header;
