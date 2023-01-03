import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, ImageBackground, Pressable, Modal } from 'react-native';
import styles from '../../styles';
import HomeButton from '../buttons/HomeButton'
import ModelCompact from '../models/ModelCompact';

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
          <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>You win!</Text>
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


export default Test2;