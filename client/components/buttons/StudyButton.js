import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const StudyButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
      title="Study"
      onPress={() => navigation.navigate('StudyTime')}
      style={styles.buttonStudy}>
        <Icon style={{
          resizeMode:"contain",
          height: 100,
          width:100,
        }}
        icon="arcticons:dictionaryformids"
        />
      <Text>Study</Text>
  </TouchableOpacity>
  );

}
export default StudyButton;
