var React = require('react');

function Forecast () {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <div className="icon">
            <i className="wi wi-night-sleet"></i>
          </div>
        </div>
        <div className="panel-footer cs-date">
          Saturday, 2016-01-01
        </div>
      </div>
    </div>
  )
}

Forecast.propTypes = {
  // weather: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
}

module.exports = Forecast;
