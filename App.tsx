import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyStack from './navigation/MyStack';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';


export default function App() {
  return (
    <ReduxProvider store={store}> 
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </ReduxProvider>
  );
}
