import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const MemoryButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
                  title="Memory"
                  onPress={() => navigation.navigate('TutorialMemoryChoice')}
                  style={styles.buttonCastleTest}>
                  <Icon style={{
                    resizeMode:"contain",
                    height: 100,
                    width:100,
                  }}
                  icon="mdi:puzzle"
                  />
                  <Text>Memory</Text>
                </TouchableOpacity>
  );

}
export default MemoryButton;
