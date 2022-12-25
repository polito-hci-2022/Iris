import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const CastleTestButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
    title="Castle Test"
    onPress={() => navigation.navigate('CastleTest')}
    style={styles.buttonCastleTest}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="mdi:castle"
    />
    <Text>Castle Test</Text>
</TouchableOpacity>
  );

}
export default CastleTestButton;
