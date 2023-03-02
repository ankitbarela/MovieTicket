import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import loginCreater  from './reducers/loginCreater'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducer = combineReducers({
    counter : counterSlice,
    login : loginCreater
})

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer
})