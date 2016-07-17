var React = require('react');
var PropTypes = React.PropTypes;
var MainContainer = require('./MainContainer');
var Header = require('./Header');

function DataItem (props) {
  return (
    <li className="list-group-item">
      <div className="row">
        <span className="cs-data-icon col-xs-1">
          {props.icon && <i className={'wi ' + props.icon}></i>}
        </span>
        <span className="cs-data-label col-xs-7">{props.label}</span>
        <span className="cs-data col-xs-1">{props.value}</span>
      </div>
    </li>
  )
}

function BigIcon (props) {
  return (
    <div id="head-icon" className="text-center">
      <i className={'wi ' + props.icon}></i>
    </div>
  )
}

function Detail (props) {
  console.log('Detail.js location:', props.location);
  console.log('Detail.js date:', props.date);
  console.log('Detail.js data:', props.data);
  return (
    <MainContainer>
      <div className="container">
        <Header location={props.location} date={props.date} />

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <BigIcon icon="wi-night-sleet" />
              </div>
              <ul className="list-group">
                <DataItem icon='wi-cloudy' label={props.data.weather[0].main} value='' />
                <DataItem icon='wi-thermometer' label='Temperature:' value={props.data.main.temp + 'K'} />
                <DataItem icon='wi-thermometer' label='Min. Temperature:' value={props.data.main.temp_min + 'K'} />
                <DataItem icon='wi-thermometer' label='Max. Temperature:' value={props.data.main.temp_max + 'K'} />
                <DataItem icon='wi-humidity' label='Pressure:' value={props.data.main.pressure} />
                <DataItem icon='wi-humidity' label='Humidity:' value={props.data.main.humidity + '%'} />
                <DataItem icon='wi-humidity' label='Wind Speed:' value={props.data.wind.speed} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

Detail.propTypes = {
  // location: PropTypes.string.isRequired,
}

module.exports = Detail;
