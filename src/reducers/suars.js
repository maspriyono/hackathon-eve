import valueEquals from 'src/libs/valueEquals';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.suars : state;
    }

    case 'SET_SUARS': {
      return action.suars;
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
