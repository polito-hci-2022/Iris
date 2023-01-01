import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground, TextInput, useState, Pressable, Modal } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';
import HomeButton from './buttons/HomeButton'
import MemoryButton from './buttons/MemoryButton';
import CastleButton from './buttons/CastleButton';
import ModelCompact from './models/ModelCompact';
import PlayButton from './buttons/PlayButton';
import NoButton from './buttons/NoButton';


const Test1  = ({navigation}) => {  
    const [word, setWord] = React.useState("");
    const [placeHolder, setPlaceHolder] = React.useState("Write here...");
    const [visibleModal, setVisibleModal] =  React.useState();

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
              Would you like tutorial for the Memory game?
            </Text>
            <View style={styles.leftArrow}></View>
            <View style={styles.leftArrowOverlap}></View>
            </View>
          <ModelCompact/>
          <HomeButton navigation={navigation}/>
          </View>
        </View>
        <View style={{flex:1.3}}>
            <TextInput style={styles.input} onChangeText={setWord} value={word} placeholder={placeHolder}></TextInput>
        <View style={{flexDirection:'row'}}>
          <Pressable style={styl.button} onPress={() => setWord(word+"A")} value={"A"}>
            <Text style={styl.text}>A</Text>
          </Pressable>
          <Pressable style={styl.button} onPress={() => setWord(word+"B")} value={"B"}>
            <Text style={styl.text}>B</Text>
          </Pressable>
          <Pressable style={styl.button} onPress={() => setWord(word+"C")} value={"C"}>
            <Text style={styl.text}>C</Text>
          </Pressable>
          <Pressable style={styl.button} onPress={() => setWord(word+"D")} value={"D"}>
            <Text style={styl.text}>D</Text>
          </Pressable>
          <Pressable style={styl.button} onPress={() => setWord(word+"E")} value={"E"}>
            <Text style={styl.text}>E</Text>
          </Pressable>
          <Pressable style={styl.button} onPress={() => setWord(word+"F")} value={"F"}>
            <Text style={styl.text}>F</Text>
          </Pressable>
        </View>
        {(word.length === 3) ? (word === "ABC")  ? 
          <View style={styl.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
          >
            <View style={styl.centeredView}>
              <View style={styl.modalView}>
                <Text style={styl.modalText}>You win!</Text>
                <Pressable onPress={() => {setWord(""); navigation.navigate('Test2');}}>
                    <Text>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal> 
          </View>
          :  
           <View style={styl.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
          >
            <View style={styl.centeredView}>
              <View style={styl.modalView}>
                <Text style={styl.modalText}>Error</Text>
                <Pressable onPress={() => setWord("")}>
                    <Text>Try Again</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          </View> : null}
        </View>
        {console.log(word.length)}
      </View>   
    
    );
  }

  const styl = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff'
      },
      row: {
        flex: 1,
        flexDirection: 'row'
      },
      body: {
        flex: 18,
        justifyContent: 'space-between',
        padding: 0,
        marginTop: 0
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      buttonStudyCompact: {
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 100,
        backgroundColor: "grey",
      },
  });

export default Test1;