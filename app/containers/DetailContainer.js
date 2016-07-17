var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  getInitialState: function () {
    return this.props.location.state;
  },
  componentDidMount: function () {
    console.log('Detail location state:', this.props.location.state);
    console.log('Current location:', this.props.params.location);
  },
  render: function () {
    return (
      <Detail
        location={this.props.params.location}
        data={this.props.location.state.weatherData}
        date={this.props.location.state.date} />
    );
  }
});

module.exports = DetailContainer;
