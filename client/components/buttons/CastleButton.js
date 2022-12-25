import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const CastleButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
    title="The Castle"
    onPress={() => navigation.navigate('CastleStory')}
    style={styles.buttonCastleTest}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="mdi:castle"
    />
    <Text>The Castle</Text>
  </TouchableOpacity>
  );

}
export default CastleButton;
