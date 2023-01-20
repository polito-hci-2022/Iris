import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const icons = {
    'Play': 'mdi:puzzle',
    'Restart': 'codicon:debug-restart',
    'Left': 'material-symbols:turn-left-sharp',
    'Right': 'material-symbols:turn-right-sharp'
}

const dimension_icons = {
    125: 75,
    100: 50,
    75: 40
}

const SquareButton = ({ dimension, position='relative', top, left, right, bottom, link, title, text, disabled=false, onClick }) => {
    const vertical = top ? {top:top}:{bottom:bottom}
    const horizontal = left ? {left:left}:{right:right}
    const color = disabled ? "#DFD3C3" : "#9E7676"
    const partial_style = {
        width: dimension,
        height: dimension,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        borderColor: "#594545",
        position: position,
        disabled: disabled
      }
    const style = Object.assign({}, partial_style, vertical, horizontal)
    return (
        <Link to={link}>
        <Button
            onClick={onClick}
            title={title}
            style={style}>
            <Icon style={{
                    resizeMode:"contain",
                    height: dimension_icons[dimension],
                    width: dimension_icons[dimension],
                }}
            icon={icons[title]}
            />
            <h6>{text}</h6>
        </Button>
        </Link>
    );

}

export default SquareButton;
