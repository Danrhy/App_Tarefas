import react from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navegar from './pages/navegar';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


export default function App() {

 

  return (
<NavigationContainer>
<Navegar />
</NavigationContainer>
  );
}
