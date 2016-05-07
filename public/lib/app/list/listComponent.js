// should check and see if there is a filter
// if yes, then use it filter the list
// if no, then show everything

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'


const List = React.createClass({
  render () {
    <ul>
      {
        'hey man nothing to see yet, gotta use redux'
      }
    </ul>
  }
});

function mapStateToProps (reduxState) {
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

export default connect(mapStateToProps)(List);
