var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainContainer = require('./MainContainer');
var Header = require('./Header');
var Summary = require('./Summary');

function Forecast () {
  return (
    <MainContainer>
      <div className="container">
        <Header location="Vila Velha" />
        <div className="row">
          <Link to='/detail/Vila Velha/2016-01-01'>
            <Summary />
          </Link>
        </div>
      </div>
    </MainContainer>
  )
}

module.exports = Forecast;
