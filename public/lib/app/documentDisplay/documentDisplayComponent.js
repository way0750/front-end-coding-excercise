import {connect} from 'react-redux';

function mapStateToProps (reduxState) {
  return {
    curReport: reduxState.curReport
  };
}

const DocumentDisplay = React.createClass({

  componentDidMount(){
    // get the DOM element
    // add class as a way to animate?
    this.DOMNode = ReactDOM.findDOMNode(this);
  },
  componentDidUpdate(){
    //doing these to animate report animation
    let title = ReactDOM.findDOMNode(this.DOMNode.children[0]);
    let body = ReactDOM.findDOMNode(this.DOMNode.children[1]);
    title.className = 'documentTitle hideDocument';
    body.className = 'documentBody hideDocument';
    setTimeout( () => {
      title.className = 'documentTitle showDocument';
      body.className = 'documentBody showDocument';
    }, 20)
  },
  render () {
    if (this.props.curReport.body === undefined) {
      return (<div className="documentDisplay">
          <h1 className="noCurReport">{this.props.curReport.title}</h1>
        </div>)
    } else {
      return (<div className="documentDisplay">
        <h1 className="documentTitle">{this.props.curReport.title}</h1>
        <div className="documentBody">{this.props.curReport.body}</div>
        </div>);
    }
  }  
});

export default connect(mapStateToProps)(DocumentDisplay);

// background-image: url();
//   background-repeat: no-repeat;
//   background-position: 90% 90%;
