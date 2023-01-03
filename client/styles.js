import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
      width:'100%',
      height: 400,
      backgroundColor: 'transparent',
      backgroundImage: ` url(${require('./assets/back.jpg')})`, 
    },
    backgroundNoImage: {
      width:'100%',
      height: 400,
    },
    backgroundCompact: {
        width:'100%',
        height: 200,
        backgroundColor: 'transparent',
        backgroundImage: ` url(${require('./assets/back.jpg')})`, 
    },
    top: {
      position: 'absolute',
      top: 100
    },
    buttonStudy: {
      width: 125,
      height: 125,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      marginLeft: 20,
    },
    buttonStudyCompact: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      position: 'absolute',
      bottom: 20,
      right: 20
    },
    buttonPlay: {
      width: 125,
      height: 125,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      marginRight: 20,
    },
    buttonTranslate: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      marginLeft: 20,
    },
    buttonBackpack: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      marginLeft: 40,
    },
    buttonCastleTest: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      marginLeft: 20,
    },
    buttonHome: {
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 100,
        backgroundColor: "grey",
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    bottom: {
      flexDirection: "row",
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      bottom: -200
    },
    rightArrow: {
      position: "absolute",
      backgroundColor: "#0078fe",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomLeftRadius: 25,
      right: -10
    },
    rightArrowOverlap: {
      position: "absolute",
      backgroundColor: "#eeeeee",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomLeftRadius: 18,
      right: -20
    
    },
    /*Arrow head for recevied messages*/
    leftArrow: {
      position: "absolute",
      backgroundColor: "#0078fe",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomRightRadius: 25,
      left: -10
    },
    leftArrowOverlap: {
      position: "absolute",
      backgroundColor: "#eeeeee",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomRightRadius: 18,
      left: -20
    },
    input: {
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 4
    },
    status: {
      padding: 10,
      textAlign: "center"
    },
    resultTranslate: {
      width: 50,
      height: 50,
      backgroundColor: 'transparent',
      backgroundImage: ` url(${require('./assets/home.png')})`, 
    },
    buttonLose: {
      width: 125,
      height: 125,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "white",
      marginLeft: 20,
    },
    buttonWin: {
      width: 125,
      height: 125,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "green",
      marginLeft: 20,
    },
    buttonLeft: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      position: 'absolute',
      bottom: 20,
      left: 200
    },
    buttonRight: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "grey",
      position: 'absolute',
      bottom: 20,
      right: 200
    },
    buttonTest: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: 'black',
    },
    textTest: {
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
    rowTest: {
      flex: 1,
      flexDirection: 'row'
    },
    bodyTest: {
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
    
})

export default styles;