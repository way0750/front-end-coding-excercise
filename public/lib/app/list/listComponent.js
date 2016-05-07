// should check and see if there is a filter
// if yes, then use it filter the list
// if no, then show everything

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'


const List = React.createClass({
  makeList () {
    let reportsArr = this.props.reports;

    reportsArr.forEach( (reportObj) => {
      let time = new Date(reportObj.created);
      reportObj.created = time;
      reportObj.title = time.getTime() + reportObj.title;
    });

    reportsArr = reportsArr.sort( (reportObj1, reportObj2) => {
      return reportObj1.created > reportObj2.created;
    });

    return reportsArr.map( (ele, index) => {
      return <li key={index} onClick={ () => {this.props.viewDocument(ele)}}> {ele.title} </li>;
    });
  },
  render () {
    let reportList = this.makeList();
    return (<ul>
          {reportList.length ? reportList : ''}
        </ul>);
  }
});

function mapStateToProps (reduxState) {
  return {
    reports: reduxState.reports
  };
}

function viewDocument (reportsObj) {
  return {
    type: 'pickReport',
    payload: reportsObj
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    viewDocument: viewDocument
  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
