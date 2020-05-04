import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const aboutStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4caf50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
        }}
      />
    </Stack.Navigator>
  );
};

export default aboutStack;
