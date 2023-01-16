import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

function HelpTile ({text_it, text_en, width, height, position, top, bottom, left, right}) {
    const [text, setText] = useState(text_en);
    const [translated, setTranslated] = useState(false);
    const partial_style = {
        position: position,
        width: width,
        height: height,
        borderWidth: 1,
        fontSize: 20,
        padding: 10,
    };
    const vertical = top ? {top:top}:{bottom:bottom};
    const horizontal = right ? {right: right}:{left:left};
    const style = Object.assign({}, partial_style, vertical, horizontal)
    useEffect(() => {translated===true ? setText(text_it):setText(text_en);}, [translated])
    return (
        <Button
            onClick={() => {setTranslated(!translated);}}
            style={style}>
            {text}
        </Button>

    );
}

export default HelpTile;
