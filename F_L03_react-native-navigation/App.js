import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomeScreen from './components/WelcomeScreen.js';
import SignUpScreen from './components/SignUpScreen.js';
import LoginScreen from './components/LoginScreen.js';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Welcome: WelcomeScreen,
    SignUp: SignUpScreen,
    Login: LoginScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
