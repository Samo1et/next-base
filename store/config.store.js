import { configureStore } from '@reduxjs/toolkit'

import userSlice from './slice/userSlice'

export function makeStore() {
  return configureStore({
    reducer: { users: userSlice }
  })
}

const store = makeStore()

export default store