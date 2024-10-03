import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './module/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: 'zhihu-app',
  storage,
  whitelist: ['user'], // 需要持久化保存的模块，默认保存所有模块（语义：白名单）
  blacklist: ['_persist'], 
  keyPrefix: '',
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
const persistor = persistStore(store)

export { store, persistor }
