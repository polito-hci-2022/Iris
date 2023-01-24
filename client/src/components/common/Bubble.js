import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Palette } from '../../Palette';

function Bubble({text, position='absolute', top, bottom, left, right}) {

    const arrow_style = rightArrow;

    const vertical = top ? {top:top} : {bottom:bottom}
    const horizontal = right ? {right:right} : {left:left}
    const partial_style = {
      backgroundColor: Palette.bubbleColor,
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
        <>
        <Container style={style}>
            <a style={{
                fontSize: 16,
                color: Palette.bubbleTextColor,
                }}>
                {text}
            </a>
            <Container style={arrow_style}>
            </Container>
        </Container>
        
        
        </>
    );
}

const rightArrow = {
    position: "relative",
    backgroundColor: Palette.bubbleColor,
    width: 20,
    height: 25,
    bottom: -34,
    borderBottomLeftRadius: 25,
    right: -50
  }

  const leftArrow = {
    position: "relative",
    backgroundColor: Palette.bubbleColor,
    width: 20,
    height: 25,
    bottom: -34,
    borderBottomRightRadius: 25,
    left: -50
  }

export default Bubble;
