import * as React from 'react';
import { Container  } from 'react-bootstrap';

function Bubble({text}) {
    return (
        <Container style={irisBubble} >
            <h1 style={irisText}>
                {text}
            </h1>
            <Container style={rightArrow}></Container>
            <Container style={rightArrowOverlap}></Container>
        </Container>
    );
}



const irisBubble = {
    backgroundColor: "#0078fe",
    padding: 10,
    marginRight: '45%',
    borderRadius: 20,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: "5%",
    maxWidth: '50%',
    alignSelf: 'flex-end',
    zIndex: 999,
  }
const irisText = {
    fontSize: 16,
    color: "#fff",
  }

const rightArrow = {
    position: "absolute",
    backgroundColor: "#0078fe",
    width: 20,
    height: 25,
    marginBottom: 15,
    marginLeft: "5%",
    borderBottomLeftRadius: 25,
  }
  const  rightArrowOverlap = {
    position: "absolute",
    backgroundColor: "#eeeeee",
    width: 20,
    marginBottom: 15,
    marginTop: 95,
    marginLeft: "5%",
    borderBottomLeftRadius: 18,
  
  }

  /*Arrow head for recevied messages*/
  /*const leftArrow = {
    position: "absolute",
    backgroundColor: "#0078fe",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  }

const leftArrowOverlap = {
    position: "absolute",
    backgroundColor: "#eeeeee",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20
  }*/


  export default Bubble;
