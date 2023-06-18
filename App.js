import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import TodoList from './screens/TodoList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          />
        <Stack.Screen
          name="To-Do"
          component={TodoList}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create();
