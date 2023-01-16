import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../AxiosConfig'
import config from '../../config'

export const requestOtp = createAsyncThunk(
  'auth/requestOtp',
  async (params) => {
    const { mobileNumber } = params
    const response = await axios.get(config.apiUrl + '/user/login?mobile='+ mobileNumber)
    const { data } = response
    return data
  }
)

export const validateOtp = createAsyncThunk(
  'auth/validateOtp',
  async (params) => {
    const { mobileNumber, otp } = params
    const response = await axios.get(config.apiUrl + '/user/login?mobile='+ mobileNumber +'&otp=' + otp)
    console.log(response)
    const { data } = response
    return data
  }
)

const initialState = {
  authToken: null,
  hideSendOtpButton: false,
  showVerifyOtpForm: false,
  showLoginForm: true,
  otpRequestSuccess: false,
  otpRequestError: false,
  otpValidateSuccess: false,
  otpValidateError: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.clear()
      state.hideSendOtpButton = false
      state.showVerifyOtpForm = false
      state.showLoginForm = true
      state.otpRequestSuccess = false
      state.otpRequestError = false
      state.otpValidateSuccess = false
      state.otpValidateError = false
      state.authToken = null
    },
    backToLogin: (state) => {
      state.hideSendOtpButton = false
      state.showVerifyOtpForm = false
      state.showLoginForm = true
      state.otpRequestSuccess = false
      state.otpRequestError = false
      state.otpValidateSuccess = false
      state.otpValidateError = false
      localStorage.clear()
    },
    setToken: (state, action) => {
      state.authToken = action.payload.authToken
    }
  },
  extraReducers: {
    [requestOtp.fulfilled]: (state, action) => {
      const {message, data}  = action.payload
      if (message === 'Success') {
        if (data === 'OTP Sent') {
          state.hideSendOtpButton = true
          state.showVerifyOtpForm = true
          state.otpRequestSuccess = true
        } else {
          state.otpRequestError = true
        }
      } else {
        state.hideSendOtpButton = false
        state.showVerifyOtpForm = false
      }
    },
    // [requestOtp.pending]: (state, action) => {
    //   state.someValue += action.payload
    // },
    // [requestOtp.rejected]: (state, action) => {
    //   state.someValue += action.payload
    // },
    [validateOtp.fulfilled]: (state, action) => {
      console.log(action)
      const { data } = action.payload
      if (data !== 'Incorrect OTP') {
        localStorage.setItem('token', data)
        state.authToken = data
        state.otpValidateSuccess = true
      } else {
        state.otpValidateError = true
        state.authToken = null
      }
    },
    // [validateOtp.pending]: (state, action) => {
    //   state.someValue += action.payload
    // },
    // [validateOtp.rejected]: (state, action) => {
    //   state.someValue += action.payload
    // }
  }
})

export const { logout, backToLogin, setToken } = authSlice.actions;


export default authSlice.reducer
