import * as React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import CastleModel from '../models/CastleModel'
import Model from '../models/Model';
import CastleStory2 from './CastleStory2';
import HomeButton from '../buttons/HomeButton'
import styles from '../../styles'

function CastleStory ({navigation}) { 
  const [position, setPosition] = React.useState([0,35,120]);
  React.useEffect(() => {
    setPosition(position);
  }, [position]);
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Study Time</Text>
          <Model/>
          <View style={styles.backgroundNoImage}>
          <CastleModel positio={position}/>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(CastleStory2)}>
          <Text>Next</Text>
        </TouchableOpacity>        
      </View>
    );
   
  }

export default CastleStory;