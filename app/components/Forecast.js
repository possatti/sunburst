var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainContainer = require('./MainContainer');
var Header = require('./Header');
var Summary = require('./Summary');

function Forecast (props) {
  return (
    <MainContainer>
      <div className="container">
        <Header location="Vila Velha" />
        <div className="row">
          {props.children}
        </div>
      </div>
    </MainContainer>
  )
}

module.exports = Forecast;
