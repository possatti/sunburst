var React = require('react');
var Forecast = require('../components/Forecast');
// var OpenWeather = require('../utils/open-weather');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
    }
  },
  componentDidMount: function () {
  },
  render: function () {
    return (
      <Forecast />
    );
  }
});

module.exports = ForecastContainer;
