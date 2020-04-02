import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  switchedToUnconnectedAccountAlert: {
    isOpen: false,
  },
}

const slice = createSlice({
  name: 'account-switch-alerts',
  initialState,
  reducers: {
    dismissSwitchedToUnconnectedAccountAlert: (state) => {
      state.switchedToUnconnectedAccountAlert.isOpen = false
    },
    switchToUnconnectedAccount: (state) => {
      state.switchedToUnconnectedAccountAlert.isOpen = true
    },
  },
})

const { actions, reducer } = slice

export const { dismissSwitchedToUnconnectedAccountAlert, switchToUnconnectedAccount } = actions

export const switchedToUnconnectedAccountAlertIsOpen = (state) => state.switchedToUnconnectedAccountAlert.isOpen

export default reducer
