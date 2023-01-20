import * as React from 'react';
import { Container } from 'react-bootstrap';

function Bubble({text, position='absolute', top, bottom, left, right, orientation='right', color}) {
    const vertical = top ? {top:top} : {bottom:bottom}
    const horizontal = right ? {right:right} : {left:left}
    const partial_style = {
      backgroundColor: "#594545",
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
                color: "#FFF8EA",
                }}>
                {text}
            </a>
        </Container>
    );
}

export default Bubble;
