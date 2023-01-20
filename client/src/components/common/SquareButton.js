import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import { Palette } from '../../Palette';

const icons = {
    'Play': 'mdi:puzzle',
    'Back': 'tabler:arrow-back-up',
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
    const color = disabled ? Palette.disabledButtonColor : Palette.buttonColor
    const partial_style = {
        width: dimension,
        height: dimension,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        borderColor: Palette.buttonBorderColor,
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
                    color: Palette.buttonTextColor
                }}
            icon={icons[title]}
            />
            <h6 style={{color: Palette.buttonTextColor}} >{text}</h6>
        </Button>
        </Link>
    );

}

export default SquareButton;
