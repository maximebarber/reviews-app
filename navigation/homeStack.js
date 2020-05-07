import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const homeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4caf50',
        },
        headerTitleStyle: {
          fontFamily: 'VictorMono-SemiBoldItalic',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} title="Reviews" />,
        }}

      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};

export default homeStack;
