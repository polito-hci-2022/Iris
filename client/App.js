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
import CastleStory2 from './components/CastleStory2';
import CastleStory3 from './components/CastleStory3';
import CastleStory4 from './components/CastleStory4';
import CastleStoryFinal from './components/CastleStoryFinal';
import CastleTest from './components/CastleTest';
import ResultTranslate from './components/ResultTranslate'
import TutorialMemory from './components/TutorialMemory'
import TutorialMemoryChoice from './components/TutorialMemoryChoice'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

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
        <Stack.Screen name="CastleStory2" component={CastleStory2} />
        <Stack.Screen name="CastleStory3" component={CastleStory3} />
        <Stack.Screen name="CastleStory4" component={CastleStory4} />
        <Stack.Screen name="CastleStoryFinal" component={CastleStoryFinal} />
        <Stack.Screen name="Memory" component={Memory} />
        <Stack.Screen name="TutorialMemory" component={TutorialMemory} />
        <Stack.Screen name="TutorialMemoryChoice" component={TutorialMemoryChoice} />
        <Stack.Screen name="Test1" component={Test1} />
        <Stack.Screen name="Test2" component={Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
