import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './Card';
import PlayButton from './buttons/PlayButton';
import styles from '../styles';
import ModelCompact from './models/ModelCompact';

const Memory  = ({navigation}) => {  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{flex: 0.7}}>
          <Text>Memory</Text>
          <View style={styles.backgroundCompact}>
          <View style={{
              backgroundColor: "#0078fe",
              padding:10,
              marginLeft: '40%',
              borderRadius: 5,
              marginBottom: 15,
              marginTop: 10,
              marginRight: "12%",
              maxWidth: '50%',
              alignSelf: 'flex-end',
              //maxWidth: 500,
              borderRadius: 20,
              }} >
            <Text style={{ fontSize: 16, color: "#fff", }}>
              Right here, there are the assigned homeworks, I'm here to help you!
            </Text>
            <View style={styles.leftArrow}></View>
            <View style={styles.leftArrowOverlap}></View>
            </View>
          <ModelCompact/>
            <PlayButton style={styles.buttonStudyCompact} navigation={navigation}/>
          </View>
        </View>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </View>
    );
  }

export default Memory;