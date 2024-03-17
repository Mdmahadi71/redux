import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './conmonents/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})