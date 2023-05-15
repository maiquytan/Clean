import {StyleSheet} from 'react-native';

import {colors, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';

const labelStyle: any = {
  color: colors.blackText,
  fontWeight: 'bold',
  fontSize: scale(13),
  lineHeight: scale(19),
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboardAwareScrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: metrics.space.s16,
    justifyContent: 'center',
  },
  label: {
    ...labelStyle,
  },
  labelPassword: {
    ...labelStyle,
    marginTop: metrics.space.s30,
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    color: colors.blackText,
    fontWeight: 'bold',
    fontSize: scale(13),
    lineHeight: scale(19),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 0,
    paddingHorizontal: metrics.space.s5,
    paddingVertical: 0,
    height: scale(40),
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.borderGray,
  },
  registerButton: {
    marginTop: scale(48),
    width: '100%',
    backgroundColor: colors.yellow,
  },
  logo: {
    width: '50%',
    height: scale(96),
    marginBottom: scale(36),
    tintColor: colors.yellow,
    alignSelf: 'center',
  },
});
