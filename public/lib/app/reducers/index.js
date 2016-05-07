import {combineReducers} from 'redux';
// there should be following reducers:
// current document being displayed or ""
// current list of reports or []
// current filter/user input or ''
import reportsReducer from './reportsReducer.js';
import curReportReducer from './curReportReducer.js';
import reportFilter from './reportFilterReducer.js';

export default combineReducers({
  reports: reportsReducer,
  curReport: curReportReducer,
  reportFilter: reportFilter
});
