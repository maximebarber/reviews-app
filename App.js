/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
// import Navigator from './routes/homeStack';

function useFonts(fontMap) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Victor-Mono': require('./assets/fonts/VictorMono-Italic.ttf'),
    'Victor-Mono-Bold': require('./assets/fonts/VictorMono-BoldItalic.ttf'),
  });
  if (!fontsLoaded) {
    return <View><Text>App loading</Text></View>;
  }
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
