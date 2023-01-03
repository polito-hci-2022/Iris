import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import StudyButton from '../../buttons/StudyButton';
import { useState, useEffect } from "react";
import { Keyboard, TextInput, StyleSheet } from "react-native";
import styles from '../../../styles';
import ModelCompact from '../../models/ModelCompact';

const BoxKeyboard = ({text}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={text}
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text style={styles.status}>{keyboardStatus}</Text>
    </View>
  );
}


const Translate  = ({navigation, text}) => {  
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
            <StudyButton style={styles.buttonStudyCompact} navigation={navigation}/>
          </View>
        </View>
        <View style={{flex:0.5}}>
            <BoxKeyboard text={"Home"}/>
            <BoxKeyboard text={"Casa"}/>
            <Button onPress={() => navigation.navigate('ResultTranslate', {
              text:text
            })} title="Translate"></Button>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground source={require('../../../assets/home.png')} style={{flex:1}}/>
        </View>
      </View>
    );
  }

export default Translate;