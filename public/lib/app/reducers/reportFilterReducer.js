//to keep track of what the current filter is
export default function (previousState, action) {
  if (action.type === 'updateFilter') {
    return action.payload;
  } else {
    return previousState === undefined ? '' : previousState;
  }
};
