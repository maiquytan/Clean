import { StyleSheet } from 'react-native';
import { useContext } from "react";

import { ThemeContext } from 'src/App';

export const getStylesGlobal = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'light' ? '#1C1C1E' : '#FFFFFF';
  const backgroundColor = theme === 'light' ? '#DFEFFF' : '#1C1C1E';
  const colorTextGray = theme === 'light' ? 'rgba(28, 28, 30, 0.4)' : 'rgba(255, 255, 255, 0.4)';
  const backgroundElement = theme ==='light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)'

  return StyleSheet.create({
    container: {
      backgroundColor,
      paddingHorizontal: 16,
    },
    topic: {
      fontSize: 20,
      fontWeight: '700',
      color: textColor,
      lineHeight: 40,
    },
    caption: {
      fontSize: 17,
      fontWeight: '600',
      color: textColor,
    },
    title: {
      fontSize: 15,
      fontWeight: '600',
      color: textColor,
    },
    textGray: {
      fontSize: 13,
      color: colorTextGray,
    },
    backgroundElement: {
      backgroundColor: backgroundElement,
      padding: 10,
      borderRadius: 16,
      alignItems: 'center',
    }
  })}
