/* eslint-disable global-require */
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import DrawerNavigator from './navigation/drawerNavigation';


const getFonts = () => Font.loadAsync({
  'VictorMono-Italic': require('./assets/fonts/VictorMono-Italic.ttf'),
  'VictorMono-SemiBoldItalic': require('./assets/fonts/VictorMono-SemiBoldItalic.ttf'),
  'VictorMono-Regular': require('./assets/fonts/VictorMono-Regular.ttf'),
  'VictorMono-SemiBold': require('./assets/fonts/VictorMono-SemiBold.ttf'),
});


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <DrawerNavigator />
    );
  }
  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontLoaded(true)}
    />
  );
}
