import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from 'src/services/api/user';
import {authActions} from 'src/stores/slices/authSlice';

function* handleLogin({payload}: PayloadAction<string>) {
  try {
    global.props.showLoading();
    const response: AxiosResponse<any> = yield call(Api.login, payload);
    yield put(authActions.loginSuccess(response));
    global.props.hideLoading();
  } catch (error) {
    yield put(authActions.loginFailure(error));
    global.props.hideLoading();
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.loginRequest.type, handleLogin);
}
