import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/global';

const ReviewDetails = ({ route, navigation }) => {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review details screen</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default ReviewDetails;
