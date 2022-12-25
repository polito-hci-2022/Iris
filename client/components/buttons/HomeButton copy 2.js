import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles';
import { Icon } from "@iconify/react";


const HomeButton  = ({navigation}) => {  
  return (
    <TouchableOpacity 
                  title="Home"
                  onPress={() => navigation.navigate('Home')}
                  style={styles.buttonHome}>
                  <Icon style={{
                    resizeMode:"contain",
                    height: 100,
                    width:100,
                  }}
                  icon="mdi:home"
                  />
                  <Text>Home</Text>
              </TouchableOpacity>
  );

}
export default HomeButton;
