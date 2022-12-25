import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';
import HomeButton from './buttons/HomeButton'
import MemoryButton from './buttons/MemoryButton';
import CastleButton from './buttons/CastleButton';

const Play  = ({navigation}) => {  
    return (
        <View style={{ flex: 1}}>
        <View style={{flex: 0.5}}>
          <Text>Play</Text>
          <View style={styles.backgroundCompact}>
          <HomeButton navigation={navigation}/>
        </View>
        </View>
        <View style={{flex:0.5}}>
        <Text> Games </Text>
        <View style={{flexDirection:'row'}}>
          <MemoryButton navigation={navigation}/>
        </View>
        </View>
        <View style={{flex: 1}}>
        <Text>Stories</Text>
          <CastleButton navigation={navigation}/>
        </View>
      </View>   
      
    );
  }




export default Play;