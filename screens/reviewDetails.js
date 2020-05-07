import React from 'react';
import { Text, View } from 'react-native';
import Card from '../shared/card';
import globalStyles from '../styles/global';

const ReviewDetails = ({ route }) => {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <Text style={globalStyles.titleText}>
          Rating:
          {' '}
          {rating}
        </Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
