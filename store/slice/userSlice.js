import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import {set} from 'lodash'

const initialState = {
    list: null,
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
        },
        updateUserName: (state, {payload}) => {
          const {name, uid} = payload;
          const updatedUsers = state.list.map(user => {
            if (+user.id === +uid) {
              user.name = name
            }
            return user
          })
        }
      },
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

export const { addUser, updateUserName } = userSlice.actions
export const selectUsers = (state) => state.users.list
export default userSlice.reducer
