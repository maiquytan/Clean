import { StyleSheet } from 'react-native';
import { useContext } from "react";

import { ThemeContext } from '../../App';

export const getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'light' ? '#1C1C1E' : '#FFFFFF';
  const backgroundColor = theme === 'light' ? '#DFEFFF' : '#1C1C1E';
  const backgroundElement = theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)'

  return StyleSheet.create({

    container: {
      backgroundColor,
      paddingHorizontal: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    content: {
      backgroundColor: backgroundElement,
      borderRadius: 16,
      marginVertical: 8,
    },
    titleContent: {
      paddingLeft: 16,
      paddingTop: 18,
      paddingBottom: 26,
      fontSize: 16,
      fontWeight: 'bold',
      color: textColor,
    },
    titlePhoto: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 40,
      paddingTop: 8,
      color: textColor,
    },
    textPhoto: {
      color: theme === 'light' ? 'rgba(28, 28, 30, 0.6)' : 'rgba(255, 255, 255, 0.6)',
      marginBottom: 10,
    },
    listPhoto: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 11,
    },
    image: {
      width: 65,
      height: 65,
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
      margin: 5
    },
    button: {
      backgroundColor: '#0A84FF',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 16,
    },
    titleButton: {
      fontSize: 13,
      fontWeight: '600',
      color: '#FFFFFF',
      paddingTop: 9,
      paddingBottom: 2,
    },
    textButton: {
      fontSize: 14,
      color: '#FFFFFF',
      paddingBottom: 9,
    },
  })
}
