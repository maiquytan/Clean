import { StyleSheet } from 'react-native';
import { useContext } from "react";

import { ThemeContext } from 'src/App';

export const getStyles = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'light' ? '#1C1C1E' : '#FFFFFF';
  const backgroundColor = theme === 'light' ? '#DFEFFF' : '#1C1C1E';
  const backgroundElement = theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)'

  return StyleSheet.create({

    container: {
      backgroundColor,
      padding: 8,
    },
    listPhoto: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 11,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
      margin: 4
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
  })
}
