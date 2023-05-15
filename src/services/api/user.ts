import {sendPost} from '.';

export const login = (params: any) => sendPost('user/login', params);

export const logout = (params: any) => sendPost('user/create_account', params);
