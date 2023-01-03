import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const YesButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
    title="Translate"
    onPress={() => navigation.navigate('TutorialMemory')}
    style={styles.buttonTranslate}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="dashicons:yes"
    />
    <Text>YES</Text>
 </TouchableOpacity>
  );

}
export default YesButton;