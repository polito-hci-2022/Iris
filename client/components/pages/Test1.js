import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground, TextInput, useState, Pressable, Modal } from 'react-native';
import styles from '../../styles';
import HomeButton from '../buttons/HomeButton'
import ModelCompact from '../models/ModelCompact';


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
          <Pressable style={styles.buttonTest} onPress={() => setWord(word+"A")} value={"A"}>
            <Text style={styles.textTest}>A</Text>
          </Pressable>
          <Pressable style={styles.buttonTest} onPress={() => setWord(word+"B")} value={"B"}>
            <Text style={styles.textTest}>B</Text>
          </Pressable>
          <Pressable style={styles.buttonTest} onPress={() => setWord(word+"C")} value={"C"}>
            <Text style={styles.textTest}>C</Text>
          </Pressable>
          <Pressable style={styles.buttonTest} onPress={() => setWord(word+"D")} value={"D"}>
            <Text style={styles.textTest}>D</Text>
          </Pressable>
          <Pressable style={styles.buttonTest} onPress={() => setWord(word+"E")} value={"E"}>
            <Text style={styles.textTest}>E</Text>
          </Pressable>
          <Pressable style={styles.buttonTest} onPress={() => setWord(word+"F")} value={"F"}>
            <Text style={styles.textTest}>F</Text>
          </Pressable>
        </View>
        {(word.length === 3) ? (word === "ABC")  ? 
          <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>You win!</Text>
                <Pressable onPress={() => {setWord(""); navigation.navigate('Test2');}}>
                    <Text>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal> 
          </View>
          :  
           <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Error</Text>
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

export default Test1;