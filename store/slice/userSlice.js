import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    list: [],
    isLoading: false,
    hasError: null
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await axios.get('http://localhost:3000/api/users');
      return response.data
    },
  )

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            return [...state, payload]
        }},
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = [...action.payload]
          })
      },
    }
)

export const { addUser } = userSlice.actions
export const selectUsers = (state) => state.users.list
export default userSlice.reducer
