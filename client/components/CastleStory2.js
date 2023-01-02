import * as React from 'react';
import { Button, View, Text, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CastleModel from './models/CastleModel'
import CastleStory3 from './CastleStory3';
import CastleStory4 from './CastleStory4';

import HomeButton from './buttons/HomeButton'
import styles from '../styles'
import { render } from 'react-dom';

function CastleStory2 ({navigation}) { 
  const [position, setPosition] = React.useState([0,35,50]);
  React.useEffect(() => {
    setPosition(position);
  }, [position]);
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Study Time</Text>
          <View style={styles.backgroundNoImage}>

          <CastleModel positio={position}/>
          <TouchableOpacity style={styles.buttonLeft} onPress={() => navigation.navigate(CastleStory3)}>
            <Text>Left</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRight} onPress={() => navigation.navigate(CastleStory4)}>
            <Text>Right</Text>
          </TouchableOpacity>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
        <Button onPress={() => navigation.navigate(CastleStory3)}>
          <Text>Next</Text>
        </Button>
        <Button onPress={() => navigation.navigate(CastleStory4)}>
          <Text>Next</Text>
        </Button>
        <Pressable onPress={() => setPosition([0,35,25])}>
          <Text>Right</Text>
        </Pressable>
        
      </View>
    );
   
  }

export default CastleStory2;