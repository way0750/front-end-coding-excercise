import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const ReportFilter = React.createClass({
  render(){
    return (
      <input 
        placeholder="enter filter here"
        onChange={ (event) => {
          this.props.updateFilter(event.target.value)
        }}
      />
      )
  }
});

function updateFilter(string) {
  return {
    type: 'updateFilter',
    payload: string
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ 
    updateFilter: updateFilter
  }, dispatch );
}

export default connect(null, mapDispatchToProps)(ReportFilter);
