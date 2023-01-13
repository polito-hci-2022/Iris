import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";


const ButtonStory = ({text, position, top, left, bottom, right, onPress, disabled=false}) => {

    const partial_style = {
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 100,
        backgroundColor: "grey",
        position: position
    }

    const vertical = top ? {top:top}:{bottom:bottom}
    const horizontal = left ? {left:left}:{right:right}
    const style = Object.assign({}, partial_style, vertical, horizontal)

    return (
            <Button style={style} onClick={onPress} disabled={disabled}>
                {text}
            </Button>
    );

}

export default ButtonStory;