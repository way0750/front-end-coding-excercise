import {connect} from 'react-redux';

function mapStateToProps (reduxState) {
  return {
    curReport: reduxState.curReport
  };
}

const DocumentDisplay = React.createClass({
  
  render () {
    return (<div className="documentDisplay">
      <h1>{this.props.curReport.title}</h1>
      {this.props.curReport.body}
      </div>)
  }  
});

export default connect(mapStateToProps)(DocumentDisplay);
