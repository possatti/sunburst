var React = require('react');
var PropTypes = React.PropTypes;

function SearchForm (props) {
  return (
    <form className="navbar-form navbar-right" role="search">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your City" />
      </div>
      <button type="submit" className="btn btn-default">Check Weather</button>
    </form>
  )
}

SearchForm.propTypes = {
  placeholderText: PropTypes.string,
  buttonText: PropTypes.string,
}

SearchForm.defaultProps = {
  placeholderText: 'Your city',
  buttonText: 'Check Weather',
}

function Navbar (props) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">SunBurst</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <SearchForm />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  brandName: PropTypes.string,
}

module.exports = Navbar;
