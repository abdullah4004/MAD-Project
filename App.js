import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Allwindow from "./src/screens/Allwindow";
import Home from "./src/screens/Home";
import Home1 from "./src/screens/Home1";
import Meditation from "./src/screens/Meditation";
import Meditation1 from "./src/screens/Meditation1";
import Rain from "./src/screens/Rain";
import Rain1 from "./src/screens/Rain1";
import Relax from "./src/screens/Relax";
import Sleep from "./src/screens/Sleep";
import Sounds from "./src/screens/Sounds";
import Untitled2 from "./src/screens/Untitled2";

const DrawerNavigation = createDrawerNavigator({
  Allwindow: Allwindow,
  Home: Home,
  Home1: Home1,
  Meditation: Meditation,
  Meditation1: Meditation1,
  Rain: Rain,
  Rain1: Rain1,
  Relax: Relax,
  Sleep: Sleep,
  Sounds: Sounds,
  Untitled2: Untitled2
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Allwindow: Allwindow,
    Home: Home,
    Home1: Home1,
    Meditation: Meditation,
    Meditation1: Meditation1,
    Rain: Rain,
    Rain1: Rain1,
    Relax: Relax,
    Sleep: Sleep,
    Sounds: Sounds,
    Untitled2: Untitled2
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "helvetica-regular": require("./src/assets/fonts/helvetica-regular.ttf"),
      "calibri-regular": require("./src/assets/fonts/calibri-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
