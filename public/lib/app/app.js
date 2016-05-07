import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/index.js';

let store = createStore(reducers);

// import searchBar
import List from './list/listComponent.js';
// import documentDisplay
import axios from 'axios';



const App = React.createClass({

  componentDidMount() {
    axios.get('/reports').then( (data) => {
      this.setState({reports: data});
    });
  },
  render() {
    return <div> nothing to see yet </div>
    }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
