import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';  // Custom hook for detecting theme
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Detect system color scheme
  const [fontsLoaded] = useFonts({
    // Load custom fonts
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide the splash screen once fonts are loaded
  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* Stack navigation for routes */}
        <Stack
          screenOptions={{
            headerShown: false, // Hide header globally
          }}
        >
          {/* Define routes */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
          <Stack.Screen name="LoginSignupScreen" options={{ headerShown: false }} />
          <Stack.Screen name="LoginForm" options={{ headerShown: true, title: 'Log In' }} />
          <Stack.Screen name="SignupForm" options={{ headerShown: true, title: 'Sign Up' }} />
          <Stack.Screen name="MainPage" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
