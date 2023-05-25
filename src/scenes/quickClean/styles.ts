
import { useContext } from "react";
import { StyleSheet } from "react-native";

import { ThemeContext } from '../../App'
import colors from "src/themes/colors";

export const getStyles = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'light' ? '#1C1C1E' : '#FFFFFF';

  return StyleSheet.create({
    cleanCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 34,
      marginTop: 22,
    },
    round1: {
      marginHorizontal: 60,
      width: 268,
      height: 268,
      borderRadius: 134,
      backgroundColor: '#FFFFFF',
    },
    round2: {
      width: 228,
      height: 228,
      borderRadius: 114,
      margin: 20,
      backgroundColor: 'rgba(10, 132, 255, 0.05)',
    },
    round3: {
      width: 202,
      height: 202,
      borderRadius: 101,
      margin: 13.5,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    round4: {
      width: 158,
      height: 158,
      color: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 10,
      borderRadius: 79,
      borderColor: 'rgba(10, 132, 255, 0.1)',
    },
    cleanContent: {
      backgroundColor: '#FFFFFF',
      marginBottom: 8,
      borderRadius: 16,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cleanTitle: {
      fontSize: 15,
      color: textColor,
      fontWeight: '600',
    },
    cleanText: {
      fontSize: 13,
      color: 'rgba(28, 28, 30, 0.4)',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 2.5,
      marginRight: 4,
    },
    colorBlock1: {
      flex: 1,
      backgroundColor: '#32D74B',
    },
    colorBlock2: {
      flex: 2,
      backgroundColor: '#FF453A',
    },
    colorBlock3: {
      flex: 1,
      backgroundColor: '#FF9F0A',
    },
    colorBar: {
      flexDirection: 'row',
      height: 10,
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 16,
    },
    explanation: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 26,
    },
    titleQuick: {
      marginTop: 23,
      marginBottom: 4,
      fontSize: 13,
      fontWeight: '500',
    },
    buttonClean: {
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0A84FF',
      borderRadius: 16,
    },
    viewCleanUp: {
      height: 80,
      bottom: 80,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      width: '50% ',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 12,
    },
    cancel: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    }
  })
}
