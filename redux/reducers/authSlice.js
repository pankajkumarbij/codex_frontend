import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authVar: 0,
}

export const authSlice = createSlice({
  name: 'authVar',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.authVar = 0;
    },
    doLogin: (state) => {
      state.authVar = 1;
    },
    doRegister: (state,action) => {
      state.authVar = 2;
    }
  },
})

export const { closeModal, doLogin, doRegister } = authSlice.actions;

export default authSlice.reducer;
