var React = require('react');
var PropTypes = React.PropTypes;

function formatDate (date) {
  // console.log('Date: ', date);
  // console.log('Hour: ', date.getHours());
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function Summary (props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <div className="icon">
            <i className={'wi ' + props.icon}></i>
          </div>
        </div>
        <div className="panel-footer cs-date">
          {formatDate(props.date)}
        </div>
      </div>
    </div>
  )
}

Summary.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
}

module.exports = Summary;
