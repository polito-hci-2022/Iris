import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const BackpackButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
    title="The Backpack"
    onPress={() => navigation.navigate('Backpack')}
    style={styles.buttonBackpack}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="mdi:backpack"
    />
    <Text>The Backpack</Text>
</TouchableOpacity>
  );

}
export default BackpackButton;
