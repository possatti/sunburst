var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Forecast = require('../components/Forecast');
var Summary = require('../components/Summary');
var ow = require('../utils/open-weather-api-helpers');
var unixtime = require('../utils/time-helper');

function get5DaysForecast (forecastList) {
  forecastList.filter(function (dayData) {
    return unixtime(dayData.dt).getHours() === 9;
  });
}

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      current: {},
      forecast: {},
    }
  },
  componentDidMount: function () {
    ow.getFiveDayForecast(this.props.params.location)
      .then(function (response) {
        this.setState({
          isLoading: false,
          forecast: response.data,
        });
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast location={this.props.params.location}>
        {this.state.forecast.list &&
          this.state.forecast.list
            // Get the 5 following days, at 9 am.
            .filter(function (dayData) {
              return unixtime(dayData.dt).getHours() === 9;
            })
            // Render each of the forecasts.
            .map(function (dayData, i) {
              return (
                <Link
                  key={i}
                  to={{
                    pathname: '/detail/' + this.props.params.location + '/' + unixtime(dayData.dt).toISOString(),
                    state: {
                      weatherData: dayData,
                      date: unixtime(dayData.dt),
                    }
                  }}
                >
                  <Summary icon='wi-night-sleet' date={unixtime(dayData.dt)} />
                </Link>
              )
            }.bind(this))
        }
      </Forecast>
    );
  }
});


module.exports = ForecastContainer;
