var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainContainer = require('./MainContainer');


var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function () {
    return {
      location: '',
    }
  },
  handleCheckWeather: function (e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/forecast/' + this.state.location,
    });
  },
  handleUpdateLocation: function (e) {
    this.setState({
      location: e.target.value,
    });
  },
  render: function () {
    return (
      <MainContainer>
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
          <h1>Sunburst</h1>
          <p>Sunburst is a weather app that uses the Open Weather API.</p>
          <form className="" role="search">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Weather for Your City"
                    onChange={this.handleUpdateLocation} />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.handleCheckWeather}>
                Check Weather Now!
            </button>
          </form>
        </div>
      </MainContainer>
    )
  }
});

module.exports = Home;
