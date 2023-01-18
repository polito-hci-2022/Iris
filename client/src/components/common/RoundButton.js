import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const icons = {
    'Play': 'mdi:puzzle',
    'Study': 'arcticons:dictionaryformids',
    'Home': 'mdi:home',
    'Backpack': 'mdi:backpack',
    'Castle': 'mdi:castle',
    'Memory': 'mdi:puzzle',
    'Translate': 'mdi:translate',
    'Yes': 'dashicons:yes',
    'No': 'mdi:alpha-x',
    'Back': 'tabler:arrow-back-up'
}

const dimension_icons = {
    150: 100,
    125: 75,
    100: 50,
    75: 20
}

const RoundButton = ({ dimension, position='relative', top, left, right, bottom, link, title, text, disabled=false, onClick }) => {
    const vertical = top ? {top:top}:{bottom:bottom}
    const horizontal = left ? {left:left}:{right:right}
    const color = disabled ? "#f1b26f" : "#e8871e"
    
    const partial_style = {
        width: dimension,
        height: dimension,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: color,
        borderColor: "#e8871e",
        position: position,
        disabled: disabled,
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
                color: "black"
            }}
            icon={icons[title]}
            />
            <h6 style={{color: "black"}}>{text}</h6>
        </Button>
        
        </Link>
    );

}




export default RoundButton;
