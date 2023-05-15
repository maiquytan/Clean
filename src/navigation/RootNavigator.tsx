import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from 'src/scenes/splash';
import {navigationRef} from 'src/services/navigationService';
import {colors} from '../themes';
import {AUTH_STACK, BOTTOM_TAB_STACK} from './appRouters';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { Header } from 'src/components/molecules';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSplash, setIsSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const authToken = await AsyncStorage.getItem('Token');
      setIsAuthenticated(!!authToken);
      setIsSplash(false);
      setIsLoading(false);
    })();
  }, [setIsAuthenticated]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: {backgroundColor: colors.white},
        }}>
        {isLoading || isSplash ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : isAuthenticated ? (
          <>
            <Stack.Screen
              name={BOTTOM_TAB_STACK}
              component={BottomTabNavigator}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={BOTTOM_TAB_STACK}
              component={BottomTabNavigator}
              options={{
                header: () => <Header />
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
