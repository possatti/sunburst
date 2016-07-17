var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainContainer = require('./MainContainer');

function Home () {
  return (
    <MainContainer>
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>Sunburst</h1>
        <p>Sunburst is a weather app that uses the Open Weather API.</p>
        <form className="" role="search">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Weather for Your City" />
              </div>
            </div>
          </div>
          <Link to='/forecast/Vila Velha'>
            <button type="submit" className="btn btn-primary btn-lg">Check Weather Now!</button>
          </Link>
        </form>
      </div>
    </MainContainer>
  )
}

module.exports = Home;
