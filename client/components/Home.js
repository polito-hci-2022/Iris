import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';
import PlayButton from './buttons/PlayButton';
import StudyButton from './buttons/StudyButton';

const image = { uri: "https://reactjs.org/logo-og.png"}

const HomeScreen = ({navigation}) => { 
    return (
      <SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.background}/>
          <View style={styles.bottom}>
            <PlayButton navigation={navigation}/>
            <StudyButton navigation={navigation}/>
          </View>
        </View>
      </SafeAreaView>
        
      );
  }

  

export default HomeScreen;
