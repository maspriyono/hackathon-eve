import valueEquals from '../libs/valueEquals';

const initialState = {
  channelId: null,
  roomId: null,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.chatroom : state;
    }

    case 'SET_CHATROOM': {
      if (valueEquals(state, action.chatroom)) {
        return state;
      } else {
        return {
          ...state,
          ...action.chatroom,
        };
      }
    }

    case 'CLEAR_CHATROOM': {
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
