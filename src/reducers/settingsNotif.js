import valueEquals from 'src/libs/valueEquals';

const initialState = {
  channels: {},
  rooms: {},
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return action.payload ? action.payload.settingsNotif : state;
    }

    case 'SET_SETTINGS_NOTIF': {
      if (valueEquals(state, action.settingsNotif)) {
        return state;
      } else {
        return {
          ...state,
          ...action.settingsNotif,
        };
      }
    }

    case 'CLEAR_SETTINGS_NOTIF': {
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
