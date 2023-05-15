import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Icon} from 'src/components/atoms';
import HomeScreen from 'src/scenes/home';
import MyPageScreen from 'src/scenes/myPage';
import {colors, images} from 'src/themes';
import {HOME_SCREEN, IMAGE_LIST, MY_PAGE_SCREEN} from './appRouters';
import ImageList from 'src/scenes/photoClean/imageList';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" screenOptions={{}}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MyPageStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" screenOptions={{}}>
      <Stack.Screen name={MY_PAGE_SCREEN} component={MyPageScreen} />
    </Stack.Navigator>
  );
};
// const PhotoStack = () => {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator headerMode="none" screenOptions={{}}>
//       <Stack.Screen name={IMAGE_LIST} component={ImageList} />
//     </Stack.Navigator>
//   );
// };

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => <Icon source={images.icUser} />,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStack}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({}) => <Icon source={images.icUser} />,
        }}
      />
      {/* <Tab.Screen
        name="Photo"
        component={PhotoStack}
        options={{
          tabBarLabel: 'Photo',
          tabBarIcon: ({}) => <Icon source={images.icUser} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
