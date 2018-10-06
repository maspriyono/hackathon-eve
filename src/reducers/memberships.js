import valueEquals from 'src/libs/valueEquals';

const initialState = {};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.memberships : state;
    }

    case 'SET_MEMBERSHIPS': {
      if (valueEquals(state, action.memberships)) {
        return state;
      } else {
        return action.memberships;
      }
    }

    case 'CLEAR_MEMBERSHIPS': {
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
