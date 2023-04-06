import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DmBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DmMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DmRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout