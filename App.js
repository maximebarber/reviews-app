import React from "react";
import Home from "./screens/home";
import { useFonts } from "@use-expo/font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Victor-Mono": require("./assets/fonts/VictorMono-Italic.ttf"),
    "Victor-Mono-Bold": require("./assets/fonts/VictorMono-BoldItalic.ttf"),
  });
  return <Home />;
}
