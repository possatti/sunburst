var axios = require('axios');

var APPID = require('./open-weather-api-key');

var helpers = {
  getCurrentWeather: function (location) {
    console.log('Fetching current weather for "' + location + '"...');
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: location,
        mode: 'json',
        appid: APPID,
      }
    }).then(function (response) {
      console.log('Current weather for "' + location + '": ', response);
    }).catch(function (err) {
      console.warn('Error while fetching current weather for "' + location + '": ', err);
    });
  },
  getFiveDayForecast: function (location) {
    console.log('Fetching forecast for "' + location + '"...');
    return axios.get('http://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: location,
        mode: 'json',
        appid: APPID,
      }
    }).then(function (response) {
      console.log('Forecast for "' + location + '": ', response);
      return response;
    }).catch(function (err) {
      console.warn('Error while fetching forecast for "' + location + '": ', err);
    });
  }
}

module.exports = helpers;
