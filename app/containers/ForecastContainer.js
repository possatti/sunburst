var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Forecast = require('../components/Forecast');
var Summary = require('../components/Summary');
var ow = require('../utils/open-weather-api-helpers');
var unixtime = require('../utils/time-helper');

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
        // console.log('Weather: ', response);
        this.setState({
          isLoading: false,
          forecast: response.data,
        });
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast>
        {this.state.forecast.list &&
          this.state.forecast.list
            .filter(function (dayData) {
              return unixtime(dayData.dt).getHours() === 9;
            })
            .map(function (dayData, i) {
              return (
                <Link to={{
                  pathname: '/detail/' + this.props.params.location + '/' + unixtime(dayData.dt).toISOString(),
                  state: {
                    weatherData: dayData,
                    date: unixtime(dayData.dt),
                  }
                }} key={i} >
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
