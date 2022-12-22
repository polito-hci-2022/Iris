import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Homescreen';
import StudyTime from './components/StudyTime';
import Play from './components/Play';
import Translate from './components/Translate';
import Backpack from './components/Backpack';
import Memory from './components/Memory';
import CastleStory from './components/CastleStory';
import CastleTest from './components/CastleTest';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StudyTime" component={StudyTime} />
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="Translate" component={Translate} />
        <Stack.Screen name="Backpack" component={Backpack} />
        <Stack.Screen name="CastleTest" component={CastleTest} />
        <Stack.Screen name="CastleStory" component={CastleStory} />
        <Stack.Screen name="Memory" component={Memory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
