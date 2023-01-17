import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const icons = {
    'Play': 'mdi:puzzle',
}

const dimension_icons = {
    125: 75,
    100: 50,
    75: 40
}

const SquareButton = ({ dimension, position='relative', top, left, right, bottom, link, title, text, disabled=false }) => {
    const vertical = top ? {top:top}:{bottom:bottom}
    const horizontal = left ? {left:left}:{right:right}
    const partial_style = {
        width: dimension,
        height: dimension,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e8871e",
        borderColor: "#e8871e",
        position: position,
        disabled: disabled,
      }
    const style = Object.assign({}, partial_style, vertical, horizontal)
    return (
        <Link to={link}>
        <Button
            title={title}
            style={style}>
            <Icon style={{
                  resizeMode:"contain",
                    height: dimension_icons[dimension],
                    width: dimension_icons[dimension],
            }}
            icon={icons[title]}
            />
            <h5>{text}</h5>
        </Button>
        </Link>
    );

}

export default SquareButton;
