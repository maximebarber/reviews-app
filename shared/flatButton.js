import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

const FlatButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{ text }</Text>
    </View>
  </TouchableOpacity>
);

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 80,
    marginTop: 15,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
  },
});
