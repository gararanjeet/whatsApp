import {Colors} from '../../../app-theme/Colors';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.primaryBackground,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.textColor,
  },
  author: {
    color: Colors.white,
    fontSize: 24,
  },
});

export default styles;
