import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const PlayButton  = ({navigation, style}) => {  
  return (
    <TouchableOpacity 
              title="Play"
              onPress={() => navigation.navigate('Play')}
              style={style}>
              <Icon style={{
                resizeMode:"contain",
                height: 100,
                width:100,
              }}
              icon="mdi:puzzle"
              />
              <Text>Play</Text>
            </TouchableOpacity>
  );

}
export default PlayButton;
