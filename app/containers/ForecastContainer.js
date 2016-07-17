var React = require('react');
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
    ow.getFiveDayForecast('Vila Velha, Brazil')
      .then(function (response) {
        // console.log('Weather: ', response);
        this.setState({
          isLoading: false,
          forecast: response.data,
        });
      }.bind(this));
  },
  handleShowDetails: function (date) {
    console.log('Show date:', date);
    // this.context.router.push({
    //   pathname: '/detail/' + this.state.location,
    //   state: {
    //     weatherData: this.state.playersInfo,
    //   }
    // })
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
                <Summary icon='wi-night-sleet' date={unixtime(dayData.dt)} key={i} />
            )
        })}
      </Forecast>
    );
  }
});


module.exports = ForecastContainer;
