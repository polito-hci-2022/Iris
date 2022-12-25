import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Translate from './Translate';
import { Icon } from "@iconify/react";
import styles from '../styles';
import HomeButton from './buttons/HomeButton';

const StudyTime  = ({navigation}) => {  
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 0.5}}>
          <Text>Study Time</Text>
          <View style={styles.backgroundCompact}>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
        <View style={{flex:0.5}}>
        <Text> Exercises </Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity 
            title="Translate"
            onPress={() => navigation.navigate('Translate')}
            style={styles.buttonTranslate}>
            <Icon style={{
              resizeMode:"contain",
              height: 100,
              width:100,
            }}
            icon="mdi:translate"
            />
            <Text>Translate</Text>
         </TouchableOpacity>
        <TouchableOpacity 
            title="Castle Test"
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
        </View>
        </View>
        <View style={{flex: 1}}>
        <Text>Test</Text>
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
        </View>
      </View>
    );
  }

export default StudyTime;
  