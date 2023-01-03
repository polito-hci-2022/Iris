import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import styles from '../../styles';
import HomeButton from '../buttons/HomeButton'
import MemoryButton from '../buttons/MemoryButton';
import CastleButton from '../buttons/CastleButton';
import ModelCompact from '../models/ModelCompact';

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
              In this page you can find a lot of funny games! 
            </Text>
            <View style={styles.leftArrow}></View>
            <View style={styles.leftArrowOverlap}></View>
            </View>
          <ModelCompact/>
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