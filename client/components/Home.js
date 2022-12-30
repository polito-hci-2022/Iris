import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';
import PlayButton from './buttons/PlayButton';
import StudyButton from './buttons/StudyButton';
import Model from './models/Model';


const image = { uri: "https://reactjs.org/logo-og.png"}

const HomeScreen = ({navigation}) => { 
    return (
      <SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.background}>
            <View style={{
              backgroundColor: "#0078fe",
              padding:10,
              marginRight: '45%',
              borderRadius: 5,
              marginBottom: 15,
              marginTop: 95,
              marginLeft: "5%",
              maxWidth: '50%',
              alignSelf: 'flex-end',
              //maxWidth: 500,
              borderRadius: 20,
              }} >
            <Text style={{ fontSize: 16, color: "#fff", }}>Hi Filippo! I'm Iris, the assistant of your Italian Teacher </Text>
            <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View>
          </View>
            <Model/>
          </View>
          <View style={styles.bottom}>
            <PlayButton navigation={navigation} style={styles.buttonPlay}/>
            <StudyButton navigation={navigation} style={styles.buttonStudy}/>
          </View>
        </View>
      </SafeAreaView>
        
      );
  }

  

export default HomeScreen;
