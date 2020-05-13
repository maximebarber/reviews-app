/* eslint-disable global-require */
import { StyleSheet } from 'react-native';

export const green = '#4caf50';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontFamily: 'VictorMono-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
  },
});

export const images = {
  ratings: {
    1: require('../assets/images/rating-1.png'),
    2: require('../assets/images/rating-2.png'),
    3: require('../assets/images/rating-3.png'),
    4: require('../assets/images/rating-4.png'),
    5: require('../assets/images/rating-5.png'),
  },
};

// export { globalStyles, images as default };
