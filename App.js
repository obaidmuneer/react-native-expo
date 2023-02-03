import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/login';
import Signup from './src/views/signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'login'} component={Login} options={{ title: 'Login Page' }} />
        <Stack.Screen name={'signup'} component={Signup} options={{title:'Signup Page'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
