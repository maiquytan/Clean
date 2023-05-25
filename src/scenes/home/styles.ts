import { StyleSheet } from 'react-native';
import { useContext } from "react";

import { ThemeContext } from '../../App';

export const getStyles = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'light' ? '#1C1C1E' : '#FFFFFF';
  const backgroundElement = theme ==='light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)'

  return StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgSetting: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: textColor,
    lineHeight: 40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 21,
    marginBottom: 5,
  },
  clean: {
    backgroundColor: 'rgba(120, 188, 254, 1)',
    padding: 20,
    borderRadius: 28,
    marginTop: 24,
  },
  cleanContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cleanLeft: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 16,
    paddingHorizontal: 17,
    paddingTop: 17,
    paddingBottom: 12,
  },
  storage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: 'rgba(100, 162, 255, 0.3)',

  },
  cleanAll: {
    marginBottom: 12,
    width: '60%',
    paddingRight: 20,
    justifyContent: 'flex-end',
  },
  cleanRight: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 8,
    flex: 1,
  },
  imageClean: {
    marginRight: 10,
  },
  cleanButtonClean: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonClean: {
    color: '#0A84FF',
    fontSize: 17,
    fontWeight: '600',
  },
  titleManual: {
    fontSize: 16,
    color: textColor,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  textManual: {
    fontSize: 13,
    color: textColor,
    fontWeight: '600',
  },
  manualCleaning: {
    color: textColor,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingTop: 34,
  },
  manual: {
    marginBottom: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  manualButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'light'? '#FFFFFF': '#3A3A3C',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  oneManual: {
    backgroundColor: backgroundElement,
    borderRadius: 16,
    padding: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  thumbnailImage : {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  selectedImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedImage: {
    width: 200,
    height: 200,
  },
  discover: {
    backgroundColor: backgroundElement,
    borderRadius: 16,
    marginBottom: 24,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 19,
    alignItems: 'center',
    position: 'relative',
  },
  titleDiscover: {
    fontSize: 15,
    fontWeight: '600',
    color: textColor,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  textDiscover: {
    fontSize: 13,
    paddingHorizontal: 10,
    color: theme === 'light'? 'rgba(28, 28, 30, 0.4)' :  'rgba(255, 255, 255, 0.4)',
  },
  imgArrowRight: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 10,
  },
  cleanUp: {
    backgroundColor: backgroundElement,
    borderRadius: 16,
    flexDirection: 'row',
    padding: 10,
    marginTop: 4,
    marginBottom: 160,
    alignItems: 'center',
  },
})}
