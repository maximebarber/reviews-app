/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';

function useFonts(fontMap) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Victor-Mono': require('./assets/fonts/VictorMono-Italic.ttf'),
    'Victor-Mono-Bold': require('./assets/fonts/VictorMono-BoldItalic.ttf'),
  });
  if (!fontsLoaded) {
    return <View><Text>App loading</Text></View>;
  }
  return <Navigator />;
}
