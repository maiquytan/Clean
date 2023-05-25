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
      paddingHorizontal: 16,
    },
    oneCalendar: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      padding: 10,
      margin: 4,
    },
    titleCalendar: {
      fontSize: 15,
      fontWeight: '600',
      color: textColor,
    },
    dayCalendar: {
      fontSize: 13,
      color: 'rgba(28,28,30,0.4)',
    }
  })
}
