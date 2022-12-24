import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';

const image = { uri: "https://reactjs.org/logo-og.png"}

const HomeScreen = ({navigation}) => { 
    return (
      <SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.background}/>
          <View style={styles.bottom}>
            <TouchableOpacity 
              title="Play"
              onPress={() => navigation.navigate('Play')}
              style={styles.buttonPlay}>
              <Icon style={{
                resizeMode:"contain",
                height: 100,
                width:100,
              }}
              icon="mdi:puzzle"
              />
              <Text>Play</Text>
            </TouchableOpacity>
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
          </View>
        </View>
      </SafeAreaView>
        
      );
  }

  

export default HomeScreen;
