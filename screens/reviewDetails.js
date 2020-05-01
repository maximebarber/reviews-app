import React from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from '../styles/global';

const ReviewDetails = ({ navigation }) => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>Review details screen</Text>
    <Button title="Go back to home" onPress={() => navigation.goBack()} />
  </View>
);

export default ReviewDetails;
