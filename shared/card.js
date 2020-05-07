import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      { children }
    </View>
  </View>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#222',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
