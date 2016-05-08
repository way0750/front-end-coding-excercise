import {connect} from 'react-redux';

function mapStateToProps (reduxState) {
  return {
    curReport: reduxState.curReport
  };
}

const DocumentDisplay = React.createClass({
    
  render () {

    if (this.props.curReport.body === undefined) {
      return (<div className="documentDisplay">
          <h1 className="noCurReport">{this.props.curReport.title}</h1>
        </div>)
    } else {
      return (<div className="documentDisplay">
        <h1>{this.props.curReport.title}</h1>
        {this.props.curReport.body}
        </div>);
    }
  }  
});

export default connect(mapStateToProps)(DocumentDisplay);

// background-image: url();
//   background-repeat: no-repeat;
//   background-position: 90% 90%;
