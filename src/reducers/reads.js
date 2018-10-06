import valueEquals from 'src/libs/valueEquals';

const initialState = {};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.reads : state;
    }

    case 'SET_READ': {
      if (valueEquals(state[action.id], action.ts)) {
        return state;
      } else {
        return {
          ...state,
          [action.id]: action.ts,
        };
      }
    }

    case 'CLEAR_READS': {
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
