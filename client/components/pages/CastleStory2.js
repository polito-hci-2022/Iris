import * as React from 'react';
import { Button, View, Text, Pressable, TouchableOpacity } from 'react-native';
import CastleModel from '../models/CastleModel'
import CastleStory3 from './CastleStory3';
import CastleStory4 from './CastleStory4';
import HomeButton from '../buttons/HomeButton'
import styles from '../../styles'

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
        <TouchableOpacity onPress={() => navigation.navigate(CastleStory3)}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
   
  }

export default CastleStory2;