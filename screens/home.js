import React from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from '../styles/global';

const Home = ({ navigation }) => {
  console.log('Navigation: ', navigation.navigate);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title="Go to Review details" onPress={() => navigation.navigate('ReviewDetails')} />
    </View>
  );
};

export default Home;
