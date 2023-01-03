import * as React from 'react';
import { Button, View, Text, Pressable, TouchableOpacity  } from 'react-native';
import CastleModel from '../../models/CastleModel'
import Model from '../../models/Model';
import RabbitModel from '../../models/RabbitModel';
import CastleStory2 from './CastleStory2';
import HomeButton from '../../buttons/HomeButton'
import styles from '../../../styles'

function CastleStoryFinal ({navigation}) { 
  const [position, setPosition] = React.useState([0,30,35]);
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
        <TouchableOpacity onPress={() => navigation.navigate(CastleStory2)}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
   
  }

export default CastleStoryFinal;