import * as React from 'react';
import { Button, View, Text, Pressable, TouchableOpacity  } from 'react-native';
import CastleModelR from '../../models/CastleModelR'
import CastleStoryFinal from './CastleStoryFinal'
import HomeButton from '../../buttons/HomeButton'
import styles from '../../../styles'

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
        <TouchableOpacity onPress={() => navigation.navigate(CastleStoryFinal)}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
   
  }

export default CastleStory4;