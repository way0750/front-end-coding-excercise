export default function (previousState, action) {
  if (action.type === 'pickReport') {
    return action.payload;
  } else {
    return previousState === undefined ? {} : previousState;
  }
};
