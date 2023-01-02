import * as React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CastleModel from './models/CastleModel'
import Model from './models/Model';
import RabbitModel from './models/RabbitModel';
import CastleStory2 from './CastleStory2';
import HomeButton from './buttons/HomeButton'
import styles from '../styles'
import { render } from 'react-dom';

function CastleStoryFinal ({navigation}) { 
  const [position, setPosition] = React.useState([0,30,40]);
  React.useEffect(() => {
    setPosition(position);
  }, [position]);
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Study Time</Text>
          <View style={styles.backgroundNoImage}>
          <Model/>
          <RabbitModel/>
          <CastleModel positio={position}/>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
        <Button onPress={() => navigation.navigate(CastleStory2)}>
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

export default CastleStoryFinal;