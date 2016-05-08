export default function (previousState, action) {
  if (action.type === 'receiveReports') {
    return action.payload;
  } else {
    return previousState === undefined ? [] : previousState;
  }
};
