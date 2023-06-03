import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import TasksScreen from '../screens/TasksScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" options={{title:"Home"}} component={HomeScreen} />
      <Stack.Screen name="List" options={{title:"List"}}component={ListScreen} />
      <Stack.Screen name="Tasks" options={{title:"Tasks"}} component={TasksScreen} />
    </Stack.Navigator>
  );
}