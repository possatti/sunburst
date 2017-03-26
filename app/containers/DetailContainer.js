var React = require('react');
var Detail = require('../components/Detail');
var MainContainer = require('../components/MainContainer');
var Header = require('../components/Header');

var DetailContainer = React.createClass({
  getInitialState: function () {
    console.log('DetailContainer.js location.state', this.props.location.state);
    return this.props.location.state;
  },
  componentDidMount: function () {
    console.log('DetailContainer.js location.state:', this.props.location.state);
    console.log('DetailContainer.js Current location:', this.props.params.location);
  },
  render: function () {
    return (
      <MainContainer>
        <div className="container">
          <Header location={this.props.params.location} date={this.props.location.state.date} />
          <Detail
            location={this.props.params.location}
            weatherData={this.props.location.state.weatherData}
            date={this.props.location.state.date} />
        </div>
      </MainContainer>
    );
  }
});

module.exports = DetailContainer;
