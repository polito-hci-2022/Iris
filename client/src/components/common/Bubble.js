import * as React from 'react';
import { Container } from 'react-bootstrap';

const rightArrow = {
  position: "absolute",
  backgroundColor: "#0078fe",
  width: 20,
  height: 25,
  bottom: 0,
  borderBottomLeftRadius: 25,
  right: -10
}

const rightArrowOverlap = {
  position: "absolute",
  backgroundColor: "#eeeeee",
  width: 20,
  height: 35,
  bottom: -6,
  borderBottomLeftRadius: 18,
  right: -20
}

const leftArrow = {
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
}

function Bubble({text, position='absolute', top, bottom, left, right, orientation='right'}) {
    const arrow_style = orientation === 'right' ? rightArrow : leftArrow
    const overlap_style = orientation === 'right' ? rightArrowOverlap : leftArrowOverlap
    const vertical = top ? {top:top} : {bottom:bottom}
    const horizontal = right ? {right:right} : {left:left}
    const partial_style = {
      backgroundColor: "#0078fe",
      padding:10,
      marginRight: '45%',
      borderRadius: 5,
      marginBottom: 15,
      marginTop: 95,
      marginLeft: "5%",
      maxWidth: '50%',
      alignSelf: 'flex-end',
      borderRadius: 20,
      zIndex: 999,
      position: position
    }
    const style = Object.assign({}, partial_style, vertical, horizontal)
    return (
        <Container style={style}>
            <p style={{
                fontSize: 16,
                color: "#fff",
                }}>
                {text}
            </p>
            <Container style={arrow_style}/>
            <Container style={overlap_style}/>
        </Container>
    );
}

export default Bubble;
