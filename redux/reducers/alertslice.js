import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    alert: false,
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    open: (state) => {
      state.alert = true;
    },
    close: (state) => {
      state.alert = false;
    }
  },
})

export const { open, close } = alertSlice.actions

export default alertSlice.reducer;