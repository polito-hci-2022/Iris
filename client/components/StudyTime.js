import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Translate from './Translate';
import { Icon } from "@iconify/react";
import styles from '../styles';
import HomeButton from './buttons/HomeButton';
import TranslateButton from './buttons/TranslateButton';
import CastleTestButton from './buttons/CastleTestButton';
import BackpackButton from './buttons/BackpackButton';

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
          <TranslateButton navigation={navigation}/>
          <BackpackButton navigation={navigation}/>
        </View>
        </View>
        <View style={{flex: 1}}>
        <Text>Test</Text>
            <CastleTestButton navigation={navigation}/>
        </View>
      </View>
    );
  }

export default StudyTime;
  