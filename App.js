/* eslint-disable global-require */
import React from 'react';
import { useFonts } from '@use-expo/font';
import Home from './screens/home';

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [fontsLoaded] = useFonts({
    'Victor-Mono': require('./assets/fonts/VictorMono-Italic.ttf'),
    'Victor-Mono-Bold': require('./assets/fonts/VictorMono-BoldItalic.ttf'),
  });
  return <Home />;
}
