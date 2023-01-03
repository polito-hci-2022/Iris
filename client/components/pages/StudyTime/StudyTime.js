import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import HomeButton from '../../buttons/HomeButton';
import TranslateButton from '../../buttons/TranslateButton';
import CastleTestButton from '../../buttons/CastleTestButton';
import BackpackButton from '../../buttons/BackpackButton';
import ModelCompact from '../../models/ModelCompact';

const StudyTime  = ({navigation}) => {  
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 0.7}}>
          <Text>Study Time</Text>
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
  