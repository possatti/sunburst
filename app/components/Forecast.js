var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;
var MainContainer = require('./MainContainer');
var Header = require('./Header');
var Summary = require('./Summary');

function Forecast (props) {
  return (
    <MainContainer>
      <div className="container">
        <Header location={props.location} />
        <div className="row">
          {props.children}
        </div>
      </div>
    </MainContainer>
  )
}

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
}

module.exports = Forecast;
