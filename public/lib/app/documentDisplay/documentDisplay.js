import {connect} from 'react-redux';


function mapStateToProps (reduxState) {
  return {
    something: reduxState
  };
}


// export default connect(mapStateToProps)(List);
