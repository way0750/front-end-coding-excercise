import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const ReportFilter = React.createClass({
  render(){
    return (
      <input placeholder="enter filter here"/>
      )
  }
});

function mapStateToProps (reduxState) {
  return {
    reportFilter: reduxState.reportFilter
  };
}

function updateFilter(string) {
  return {
    type: 'updateFilter',
    payload: string
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ 
    propName: updateFilter
  }, dispatch );
}

// export default connect(mapStateToProps, mapDispatchToProps)(List);

// export default connect(mapStateToProps)(List);
