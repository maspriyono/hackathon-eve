import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session'

import user from './user';
import channels from './channels';
import chatroom from './chatroom';

const persistConfig = {
  key: 'store',
  storage: storageSession
}

const rootReducer = combineReducers({
  user,
  channels,
  chatroom,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
store.subscribe(() => console.log(store.getState()))

export const persistor = persistStore(store);

export default store;
