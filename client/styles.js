import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
      width:'100%',
      height:400,
      backgroundColor: 'transparent',
      backgroundImage: ` url(${require('./assets/back.jpg')})`, 
    },
    backgroundCompact: {
        width:'100%',
        height:150,
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
  })

  export default styles;