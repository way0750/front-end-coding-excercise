import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import reducers from './reducers/index.js';

let store = createStore(reducers);

import SearchBar from './searchBar/searchBarComponent.js'
import List from './list/listComponent.js';
import DocumentDisplay from './documentDisplay/documentDisplayComponent.js'
import mockData from './mockDataForDemo.js';
// import axios from 'axios';
// 
// since we are using github to show demo, we can't run a node server on github.com
// so we won't need axios to make http request
// and we will simply hard code all reports in here

const App = React.createClass({
  componentDidMount() {
    // axios.get('/reports').then( (data) => {
    //   this.props.receiveReports(data.data);
    // });
    this.props.receiveReports(mockData);
  },
  render() {
    return (
      <div className='appView'>
        <header className="banner">
          <div><h1> Security Briefings </h1></div>
          <SearchBar />
        </header>
        <List/>
        <DocumentDisplay/>
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
