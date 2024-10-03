import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userInfo: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})
export const { setUserInfo, setToken } = userSlice.actions
export default userSlice.reducer
