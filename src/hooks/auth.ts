import {useDispatch} from 'react-redux';

import {authActions} from 'src/stores/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();

  const login = (param: any) => dispatch(authActions.loginRequest(param));

  return {
    login,
  };
};

export {useAuth};
