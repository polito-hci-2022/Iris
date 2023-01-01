import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground, Pressable, Modal } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@iconify/react";
import styles from '../styles';
import HomeButton from './buttons/HomeButton'
import MemoryButton from './buttons/MemoryButton';
import CastleButton from './buttons/CastleButton';
import ModelCompact from './models/ModelCompact';
import YesButton from './buttons/YesButton';
import NoButton from './buttons/NoButton';

const Test2  = ({navigation}) => {
    const [lose, setLose] = React.useState("false");
    const [lose1, setLose1] = React.useState("false");
    const [lose2, setLose2] = React.useState("false");
    const [win, setWin] = React.useState("false");  

    let touchProps = {
        style: lose === true ? styles.buttonLose : styles.buttonStudy
    }
    let touchProps1 = {
        style: lose1 === true ? styles.buttonLose : styles.buttonStudy
    }
    let touchProps2 = {
        style: lose2 === true ? styles.buttonLose : styles.buttonStudy
    }
    let touchPropsW = {       
        style: win === true ? styles.buttonWin : styles.buttonStudy
    }


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
        <View style={{flex:1}}>
        <View style={{flexDirection:'row'}}>
          <Pressable style={styles.buttonPlay} onPress={() => setLose(true)} {...touchProps}>
            <Text>Fiume</Text>
          </Pressable>
          <Pressable style={styles.buttonPlay}  onPress={() => setWin(true)} {...touchPropsW}>
            <Text>Coniglio</Text>
          </Pressable>
          {win === true ? 
          <View style={styl.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
          >
            <View style={styl.centeredView}>
              <View style={styl.modalView}>
                <Text style={styl.modalText}>You win!</Text>
                <Pressable onPress={() => {navigation.navigate('StudyTime');}}>
                    <Text>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal> 
          </View>
          :  
           null }
          </View>
          <View style={{flexDirection:'row'}}>
          <Pressable style={styles.buttonPlay} onPress={() => setLose1(true)} {...touchProps1}>
            <Text>Barca</Text>
          </Pressable>
          <Pressable style={styles.buttonPlay} onPress={() => setLose2(true)} {...touchProps2}>
            <Text>Festa</Text>
          </Pressable>
          </View>


        </View>
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

export default Test2;