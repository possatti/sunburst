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
  return (
    <MainContainer>
      <div className="container">
        <Header location='Vila Velha' date='Saturday, 2016-01-01' />

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <BigIcon icon="wi-night-sleet" />
              </div>
              <ul className="list-group">
                <DataItem icon='wi-cloudy' label='Clear Sky' value=''/>
                <DataItem icon='wi-thermometer' label='Min. Temperature:' value='70ºF'/>
                <DataItem icon='wi-thermometer' label='Max. Temperature:' value='73ºF'/>
                <DataItem icon='wi-humidity' label='Humidity:' value='90%'/>
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
