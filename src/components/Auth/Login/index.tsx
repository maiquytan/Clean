import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {useSelector} from 'react-redux';
import {useFormik} from 'formik';
import _ from 'lodash';

import {Button, Input} from 'src/components/atoms';
// import i18next from 'src/i18n';
import {makeLoginInSchema} from 'src/utils/schemas/auth';
import {useAuth} from '../../../hooks/index';
import images from '../../../themes/images';
import {styles} from './styles';

const LoginScreen = () => {
  const {values, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: {loginId: '', password: ''},
    validationSchema: makeLoginInSchema(),
    onSubmit: (data: any) => {
      handleLogin(data.loginId, data.password);
    },
  });

  const {login} = useAuth();

  const handleLogin = (loginId: String, password: String) => {
    if (_.isEmpty(loginId) || _.isEmpty(password)) {
      return;
    }
    login({
      login: loginId,
      password: password,
      device_token: '',
    });
  };

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
          <Text style={styles.label}>ログインID</Text>
          <Input
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={values.loginId}
            onChangeText={handleChange('loginId')}
            onBlur={handleBlur('loginId')}
          />
          <View style={styles.divider} />
          <Text style={styles.labelPassword}>パスワード</Text>
          <Input
            secureTextEntry
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          <View style={styles.divider} />
          <Button
            style={styles.registerButton}
            title="ログイン"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
