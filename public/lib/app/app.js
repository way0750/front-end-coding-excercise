import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import reducers from './reducers/index.js';

let store = createStore(reducers);

import SearchBar from './searchBar/searchBarComponent.js'
import List from './list/listComponent.js';
import DocumentDisplay from './documentDisplay/documentDisplayComponent.js'

import axios from 'axios';



const App = React.createClass({
  componentDidMount() {
    axios.get('/reports').then( (data) => {
      this.props.receiveReports(data.data);
    });
  },
  render() {
    return (
      <div className='appView'>
        <header>
        <h1>reports: </h1>
          <SearchBar />
        </header>

        <div>

          <List className="listOfReports" />

          <DocumentDisplay className="documentDisplay" />
        </div>

      </div>
      );
    }
});




function mapStateToProps (reduxState) {
  return {
    reports: reduxState.reports
  };
}

function receiveReports (reportsArr) {
  return {
    payload: reportsArr,
    type: 'receiveReports'
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    receiveReports: receiveReports
  }, dispatch );
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );
