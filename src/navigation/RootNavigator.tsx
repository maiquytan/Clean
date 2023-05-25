import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'src/scenes/splash';
import { navigationRef } from 'src/services/navigationService';
import { colors } from '../themes';
import { AUTH_STACK, BOTTOM_TAB_STACK, SETTING } from './appRouters';
import BottomTabNavigator from './BottomTabNavigator';
// import { Header } from 'src/components/molecules';
import Setting from 'src/scenes/setting';
import PhotoCleaning from 'src/scenes/photoClean';
import { Text, TouchableOpacity } from 'react-native';
import VideoCleaning from 'src/scenes/videoClean';
import ContactsCleaning from 'src/scenes/contactsClean';
import QuickClean from 'src/scenes/quickClean/quickClean1';
import Screenshot from 'src/scenes/photoClean/screenshot';
import CalendarClean from 'src/scenes/calendarClean';
import Contacts from 'src/scenes/contactsClean/contacts';
import QuickClean2 from 'src/scenes/quickClean/quickClean2';
import Loading from 'src/scenes/quickClean/loading';

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
          cardStyle: { backgroundColor: colors.white },
        }}>
        {isLoading || isSplash ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
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

            />
          </>
        )}
        <Stack.Screen name='Setting' component={Setting}
          options={({ navigation }) => ({
            headerTitle: 'Settings',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name='Photos' component={PhotoCleaning} />
        <Stack.Screen name='Videos' component={VideoCleaning} />
        <Stack.Screen name='Contacts' component={ContactsCleaning} />
        <Stack.Screen name='QuickClean' component={QuickClean}
        options={({ navigation }) => ({
          headerTitle: 'Quick Cleaner',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
        })}
        />
        <Stack.Screen name='Screenshot' component={Screenshot} />
        <Stack.Screen name='Calendar' component={CalendarClean} />
        <Stack.Screen name='AllContacts' component={Contacts} />
        <Stack.Screen name='QuickClean2' component={QuickClean2} />
        <Stack.Screen name='Loading' component={Loading} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
