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
    125: 75,
    75: 50,
}



const RoundButton = ({ dimension, position='relative', top, left, right, bottom, link, title, text }) => {
    const vertical = top ? {top:top}:{bottom:bottom}
    const horizontal = left ? {left:left}:{right:right}
    
    const partial_style = {
        width: dimension,
        height: dimension,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "grey",
        position: position
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
                    width:dimension_icons[dimension],
                    color: 'black'
            }}
            icon={icons[title]}
            />
            <h5 style={{ color: 'black' }} >{text}</h5>
        </Button>
        </Link>
    );

}




export default RoundButton;
