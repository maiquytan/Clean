import {store} from 'src/stores';

export const getToken = () => {
  const {auth} = store.getState();
  return auth.token || '';
};
