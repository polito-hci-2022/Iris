import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';

const Play  = ({navigation}) => {  
    return (
        <View style={{ flex: 1}}>
        <View style={{flex: 0.5}}>
          <Text>Play</Text>
          <View style={styles.backgroundCompact}>
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
        </View>
        </View>
        <View style={{flex:0.5}}>
        <Text> Games </Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity 
                  title="Memory"
                  onPress={() => navigation.navigate('Memory')}
                  style={styles.buttonCastleTest}>
                  <Icon style={{
                    resizeMode:"contain",
                    height: 100,
                    width:100,
                  }}
                  icon="mdi:puzzle"
                  />
                  <Text>Memory</Text>
                </TouchableOpacity>
        </View>
        </View>
        <View style={{flex: 1}}>
        <Text>Stories</Text>
        <TouchableOpacity 
                  title="The Castle"
                  onPress={() => navigation.navigate('CastleStory')}
                  style={styles.buttonCastleTest}>
                  <Icon style={{
                    resizeMode:"contain",
                    height: 100,
                    width:100,
                  }}
                  icon="mdi:castle"
                  />
                  <Text>The Castle</Text>
                </TouchableOpacity>
        </View>
      </View>   
      
    );
  }




export default Play;