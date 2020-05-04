/* eslint-disable global-require */
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import DrawerNavigator from './navigation/drawerNavigation';


const getFonts = () => Font.loadAsync({
  'Victor-Mono': require('./assets/fonts/VictorMono-Italic.ttf'),
  'Victor-Mono-Bold': require('./assets/fonts/VictorMono-BoldItalic.ttf'),
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
