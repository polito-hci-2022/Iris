import * as React from 'react';
import { Container } from 'react-bootstrap';

const rightArrow = {
  position: "absolute",
  backgroundColor: "#fec601",
  width: 20,
  height: 25,
  bottom: 0,
  borderBottomLeftRadius: 25,
  right: -10
}

const rightArrowOverlap = {
  position: "absolute",
  width: 20,
  height: 35,
  bottom: -6,
  borderBottomLeftRadius: 18,
  right: -20
}

const leftArrow = {
  position: "absolute",
  backgroundColor: "#fec601",
  width: 20,
  height: 25,
  bottom: 0,
  borderBottomRightRadius: 25,
  left: -10
}

const leftArrowOverlap = {
  position: "absolute",
  width: 20,
  height: 35,
  bottom: -6,
  borderBottomRightRadius: 18,
  left: -20
}

function Bubble({text, position='absolute', top, bottom, left, right, orientation='right', color}) {
    
    const arrow_style = orientation === 'right' ? rightArrow : leftArrow
    const overlap_style = orientation === 'right' ? rightArrowOverlap : leftArrowOverlap
    const bgC = {backgroundColor: color}

    const overlap_style_color = Object.assign({}, overlap_style, bgC)
    console.log(overlap_style_color)

    const vertical = top ? {top:top} : {bottom:bottom}
    const horizontal = right ? {right:right} : {left:left}
    const partial_style = {
      backgroundColor: "#fec601",
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
      position: position,
    }
    const style = Object.assign({}, partial_style, vertical, horizontal)
    return (
        <Container style={style}>
            <a style={{
                fontSize: 16,
                color: "black",
                backgroundColor: "#fec601",
                }}>
                {text}
            </a>
            <Container style={arrow_style}/>
            <Container style={overlap_style_color}/>
        </Container>
    );
}

export default Bubble;
