import React, { useState } from 'react';
import {Image, SafeAreaView, Text, View, TouchableNativeFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';

import images from '../../../themes/images';
import {styles} from './styles';
import navigator from 'src/services/navigationService';
import { EXIST_USER_SCREEN } from 'src/navigation/appRouters';

const LoginScreen = () => {
  const [pressExist, setPressExist] = useState<boolean>(false);
  const [pressNew, setPressNew] = useState<boolean>(false);

  const handlePressExist = () => {
    setPressExist(true);
    setPressNew(false);
    navigator.push(EXIST_USER_SCREEN);
  }

  const handlePressNew = () => {
    setPressExist(false);
    setPressNew(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.keyboardAwareScrollView}>
        <View style={styles.content}>
          <Image
            source={images.imLogo}
            resizeMode="contain"
            style={styles.logo}
          />
          <TouchableNativeFeedback onPress={handlePressExist}>
            <View style={pressExist ? styles.boxRed : styles.box}>
              <Image
                source={pressExist ? images.existUser : images.existUserRed}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={pressExist ? styles.labelWhite : styles.label}>Login as an Existing Customer</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={handlePressNew}>
            <View style={pressNew ? styles.boxNewRed : styles.boxNew}>
              <Image
                source={pressNew ? images.newUser : images.newUserRed}
                resizeMode="contain"
                style={styles.imgNew}
              />
              <Text style={pressNew ? styles.labelWhite : styles.label}>Login as an Existing Customer</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
