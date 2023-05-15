import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from 'src/scenes/auth/login';
import RegisterScreen from 'src/scenes/auth/register';
import ExistAccountScreen from 'src/scenes/auth/existAccount';
import {LOGIN_SCREEN, REGISTER_SCREEN, EXIST_USER_SCREEN} from './appRouters';


const MainStack = createStackNavigator();

const AuthStack = () => (
  <MainStack.Navigator headerMode={'none'}>
    <MainStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <MainStack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
    <MainStack.Screen name={EXIST_USER_SCREEN} component={ExistAccountScreen} />
  </MainStack.Navigator>
);

export default AuthStack;
