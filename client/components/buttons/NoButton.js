import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const NoButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
    title="Translate"
    onPress={() => navigation.navigate('Memory')}
    style={styles.buttonTranslate}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="mdi:alpha-x"
    />
    <Text>NO</Text>
 </TouchableOpacity>
  );

}
export default NoButton;
