import {connect} from 'react-redux';

function mapStateToProps (reduxState) {
  return {
    curReport: reduxState.curReport
  };
}

const DocumentDisplay = React.createClass({
  
  render () {
    return <div> {this.props.curReport.title}</div>
  }  
});

export default connect(mapStateToProps)(DocumentDisplay);
