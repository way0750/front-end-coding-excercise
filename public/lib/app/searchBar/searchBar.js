import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


function mapStateToProps (reduxState) {
  //get data from reduxState;
  return {
    something: reduxState
  };
}

function actionCreator () {
  return {
    payload: 'nothing',
    type: 'clicking'
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreator({ propName: actionCreator }, dispatch );
}

// export default connect(mapStateToProps, mapDispatchToProps)(List);

// export default connect(mapStateToProps)(List);
