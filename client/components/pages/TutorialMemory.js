import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground, useState } from 'react-native';
import styles from '../../styles';
import HomeButton from '../buttons/HomeButton'
import ModelCompact from '../models/ModelCompact';
import Game from '../game/Game';

const Play  = ({navigation}) => {  
    return (
        <View style={{ flex: 1}}>
        <View style={{flex: 0.7}}>
          <Text>Play</Text>
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
              Click on a card!
            </Text>
            <View style={styles.leftArrow}></View>
            <View style={styles.leftArrowOverlap}></View>
            </View>
          <ModelCompact/>
          <HomeButton navigation={navigation}/>
          </View>
        </View>
        <View style={{flex:1}}>
        <View style={{flexDirection:'row'}}>
          <Game></Game>
        </View>
        </View>
      </View>   
    );
  }


export default Play;