import * as React from 'react';
import { Button, Container, View, Text } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const CastleButton  = (props) => { 

  return (
    <Button 
      title="The Castle"
      style={buttonCastleTest}
      onClick={() => props.navigation('/CastleStory1')}>
    <Icon style={{
      resizeMode:"contain",
      height: 50,
      width: 50,
    }}
    icon="mdi:castle"
    />
    <h3>The Castle</h3>
  </Button> 
  );

}

const buttonCastleTest=  {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20,
}

export default CastleButton;
