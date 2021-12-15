import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'

import userSlice from './slice/userSlice'

const store = configureStore({
    reducer: { 
        users: userSlice,
        counter: counterSlice
      }
  })

export default store