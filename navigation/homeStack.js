import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const homeStack = () => {
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
        name="Home"
        component={Home}
        options={{
          title: 'Reviews',
        }}
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};

export default homeStack;
