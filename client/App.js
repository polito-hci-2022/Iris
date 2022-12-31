import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import StudyTime from './components/StudyTime';
import Play from './components/Play';
import Translate from './components/Translate';
import Backpack from './components/Backpack';
import Memory from './components/Memory';
import CastleStory from './components/CastleStory';
import CastleTest from './components/CastleTest';
import ResultTranslate from './components/ResultTranslate'
import TutorialMemory from './components/TutorialMemory'
import TutorialMemoryChoice from './components/TutorialMemoryChoice'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StudyTime" component={StudyTime} />
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="Translate" component={Translate} />
        <Stack.Screen name="ResultTranslate" component={ResultTranslate} />
        <Stack.Screen name="Backpack" component={Backpack} />
        <Stack.Screen name="CastleTest" component={CastleTest} />
        <Stack.Screen name="CastleStory" component={CastleStory} />
        <Stack.Screen name="Memory" component={Memory} />
        <Stack.Screen name="TutorialMemory" component={TutorialMemory} />
        <Stack.Screen name="TutorialMemoryChoice" component={TutorialMemoryChoice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
