import * as React from 'react';
import { Button, View, Text, SafeAreaView} from 'react-native';
import styles from '../../../styles';
import PlayButton from '../../buttons/PlayButton';
import StudyButton from '../../buttons/StudyButton';
import Model from '../../models/Model';


const image = { uri: "https://reactjs.org/logo-og.png"}

const HomeScreen = ({navigation}) => { 
    return (
      <SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.background}> {/*top part*/}
            <View style={{
              backgroundColor: "#0078fe",
              padding:10,
              marginRight: '45%',
              borderRadius: 5,
              marginBottom: 15,
              marginTop: 95,
              marginLeft: "5%",
              maxWidth: '50%',
              alignSelf: 'flex-end',
              //maxWidth: 500,
              borderRadius: 20,
              }} > {/*container text */}
            <Text style={{ fontSize: 16, color: "#fff", }}>Hi Filippo! I'm Iris, the assistant of your Italian Teacher </Text> {/*message and text*/}
            <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View>{/*arrow message*/}
          </View>
            <Model/> {/*iris import da file model.js - import Model from './models/Model';*/}
          </View> {/*end top part*/}
          <View style={styles.bottom}>
            <PlayButton navigation={navigation} style={styles.buttonPlay}/>
            <StudyButton navigation={navigation} style={styles.buttonStudy}/>
          </View>
        </View>
      </SafeAreaView>
        
      );
  }

  

export default HomeScreen;
