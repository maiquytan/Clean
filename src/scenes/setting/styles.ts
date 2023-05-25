import { StyleSheet } from 'react-native';
import { useContext } from "react";

import { ThemeContext } from '../../App';

export const getStyles = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'light' ? '#1C1C1E' : '#FFFFFF';
  const backgroundColor = theme === 'light' ? '#DFEFFF' : '#1C1C1E';

  return StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingLeft: 8,
      position: 'relative',
    },
    back: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backText: {
      paddingLeft: 5,
      fontSize: 17,
      color: '#007AFF',
    },
    titleHeader: {
      position: 'absolute',
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 20,
      color: textColor,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    banner: {
      margin: 10,
      position: 'relative',
      height: 100,
      marginBottom: 0,
    },
    contentBanner: {
      position: 'absolute',
      top: 15,
      left: 22,
    },
    titleBanner: {
      fontSize: 20,
      lineHeight: 20,
      fontWeight: 'bold',
      color: textColor,
    },
    textBanner: {
      fontSize: 13,
      lineHeight: 18,
      color: textColor,
    },
    buttonBanner: {
      backgroundColor: '#FFF9CB',
      borderRadius: 10,
      width: 86,
      paddingHorizontal: 20,
      paddingVertical: 2,
      marginTop: 6,
    },
    buttonTextBanner: {
      color: '#1C1C1E',
      fontWeight: 'bold',
      lineHeight: 22,
      fontSize: 13,
    },
    imgBanner: {
      position: 'absolute',
      top: -8,
      right: 20,
      height: 100,
    },
    titleSetting: {
      paddingLeft: 16,
      color: theme === 'light' ? 'rgba(28, 28, 30, 0.4)' : 'rgba(255, 255, 255, 0.4)',
      fontSize: 11,
      paddingTop: 23,
    },
    oneSetting: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 11,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textSetting: {
      paddingLeft: 8,
      color: textColor,
      fontSize: 15,
    },
    horizontalRule: {
      height: 1,
      backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
    },
    theme: {
      flexDirection: 'row',
      backgroundColor: theme === 'light' ? 'rgba(28, 28, 30, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      borderRadius: 12,
      padding: 4,
    },
    lightdark: {
      flexDirection: 'row',
      paddingHorizontal: 11,
      alignItems: 'center',
      alignContent: 'center',
      borderRadius: 8,
    },
    textTheme: {
      fontSize: 11,
      fontWeight: '600',
      lineHeight: 24,
      paddingLeft: 5,
    },
    textLight: {
      color: 'rgba(255, 255, 255, 0.6)',
    },
    textDark: {
      color: '#1C1C1E',
    },
    textCaches: {
     color: theme === 'light' ? 'rgba(28, 28, 30, 0.4)' : 'rgba(255, 255, 255, 0.4)',
    }

  })
}
