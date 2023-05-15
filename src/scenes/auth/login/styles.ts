import {StyleSheet} from 'react-native';

import {colors, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';

const labelStyle: any = {
  color: colors.black,
  fontWeight: 'bold',
  fontSize: scale(16),
  lineHeight: scale(21),
  alignSelf: 'center',
};

const boxStyle: any = {
  width: '80%',
  alignSelf: 'center',
  backgroundColor: '#FDFDFD',
  borderRadius: scale(10),
  paddingTop: scale(16),
  paddingBottom: scale(24),
  elevation: scale(4)
}

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
    justifyContent: 'center',
  },
  label: {
    ...labelStyle,
  },
  labelWhite: {
    ...labelStyle,
    color: colors.white,
  },
  logo: {
    width: '50%',
    height: scale(100),
    marginBottom: scale(40),
    alignSelf: 'center',
  },
  img: {
    width: scale(65),
    height: scale(80),
    alignSelf: 'center',
  },
  imgNew: {
    width: scale(55),
    height: scale(100),
    alignSelf: 'center',
  },
  box: {
    ...boxStyle,
  },
  boxNew: {
    ...boxStyle,
    paddingTop: scale(0),
    marginTop: scale(32),
  },
  boxRed: {
    ...boxStyle,
    backgroundColor: '#E25C50',
  },
  boxNewRed: {
    ...boxStyle,
    paddingTop: scale(0),
    marginTop: scale(32),
    backgroundColor: '#E25C50',
  }
});
