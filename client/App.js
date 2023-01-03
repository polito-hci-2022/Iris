import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/pages/Home';
import StudyTime from './components/pages/StudyTime';
import Play from './components/pages/Play';
import Translate from './components/pages/Translate';
import Backpack from './components/pages/Backpack';
import Memory from './components/pages/Memory';
import CastleStory from './components/pages/CastleStory';
import CastleStory2 from './components/pages/CastleStory2';
import CastleStory3 from './components/pages/CastleStory3';
import CastleStory4 from './components/pages/CastleStory4';
import CastleStoryFinal from './components/pages/CastleStoryFinal';
import CastleTest from './components/pages/CastleTest';
import ResultTranslate from './components/pages/ResultTranslate'
import TutorialMemory from './components/pages/TutorialMemory'
import TutorialMemoryChoice from './components/pages/TutorialMemoryChoice'
import Test1 from './components/pages/Test1'
import Test2 from './components/pages/Test2'

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
