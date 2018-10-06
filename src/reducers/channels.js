import valueEquals from '../libs/valueEquals';

const initialState = {};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.channels : state;
    }

    case 'SET_CHANNEL': {
      if (valueEquals(state[action.id], action.channel)) {
        return state;
      } else {
        return {
          ...state,
          [action.id]: action.channel,
        };
      }
    }

    case 'REMOVE_CHANNEL': {
      if (!(action.id in state)) {
        return state;
      } else {
        const newState = { ...state };
        delete newState[action.id];
        return newState;
      }
    }

    case 'CLEAR_CHANNELS': {
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
