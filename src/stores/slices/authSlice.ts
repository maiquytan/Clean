import {createSlice} from '@reduxjs/toolkit';

import {CommonStatus} from './types';

interface IAuthState {
  error?: any;
  token?: string;
  status: CommonStatus;
}

const initialState: IAuthState = {
  status: CommonStatus.IDLE,
};

const loginRequest = state => {
  state.status = CommonStatus.LOADING;
  delete state.error;
};

const loginSuccess = (state, {payload}) => {
  state.status = CommonStatus.SUCCESS;
  state.token = payload?.access_token || '';
  state.error = null;
};

const loginFailure = (state, {payload}) => {
  state.status = CommonStatus.ERROR;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest,
    loginSuccess,
    loginFailure,
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
