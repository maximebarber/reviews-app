import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const ReviewDetails = ({ route }) => {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.titleText}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: '#4C79AF',
    borderTopWidth: 1,
    marginTop: 16,
    paddingTop: 16,
  },
});

export default ReviewDetails;
