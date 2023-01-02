import * as React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CastleModelR from './models/CastleModelR'
import CastleStory3 from './CastleStory3';
import CastleStoryFinal from './CastleStoryFinal'
import HomeButton from './buttons/HomeButton'
import styles from '../styles'
import { render } from 'react-dom';

function CastleStory4 ({navigation}) { 
  const [position, setPosition] = React.useState([-25,15,30]);
  React.useEffect(() => {
    setPosition(position);
  }, [position]);
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Study Time</Text>
          <View style={styles.backgroundNoImage}>
          <CastleModelR positio={position}/>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
        <Button onPress={() => navigation.navigate(CastleStoryFinal)}>
          <Text>Next</Text>
        </Button>
        <Pressable onPress={() => setPosition([0,35,25])}>
          <Text>Right</Text>
        </Pressable>
        <Pressable onPress={() => setPosition([0,35,25])}>
          <Text>Right</Text>
        </Pressable>
        
      </View>
    );
   
  }

export default CastleStory4;