import { StyleSheet } from 'react-native';

const colors = {
  primary: '#1C1C1E',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#0000FF',
};

export default StyleSheet.create({

  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconHeader: {
    marginRight: 21,
  },
  clean: {
    backgroundColor: 'rgba(120, 188, 254, 1)',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 28,
  },
  titleClean: {
    fontSize: 13,
    color: 'rgba(28, 28, 30, 0.4)',
  },
  textClean: {
    fontSize: 15,
    fontWeight: '600',

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
    width: '55%',
    paddingRight: 20,
  },
  cleanRight: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 8,
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
  },
  titleManual: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  textManual: {
    fontSize: 13,
    color: colors.white,
    fontWeight: '600',
  }
});
