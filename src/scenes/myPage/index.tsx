import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

const MyPageScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPageScreen</Text>
    </SafeAreaView>
  );
};

export default MyPageScreen;
