import valueEquals from '../libs/valueEquals';

const initialState = {};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.user : state;
    }

    case 'SET_USER': {
      if (valueEquals(state, action.user)) {
        return state;
      } else {
        return action.user;
      }
    }

    case 'CLEAR_USER': {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

let savedState = initialState;
export const getState = () => {
  return savedState;
}
export default (...args) => {
  savedState = reducer(...args);
  return savedState;
}
