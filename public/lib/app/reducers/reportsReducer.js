export default function (previousState, action) {
  // make sure to return previousState;
  if (action.type === 'receiveReports') {
    return action.payload;
  } else {
    return previousState === undefined ? [] : previousState;
  }
};
