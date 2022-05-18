import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Components/features/auth/authSlice'

export const store = configureStore({
  reducer: {},
  reducer: {
    auth: authReducer,
  },
})