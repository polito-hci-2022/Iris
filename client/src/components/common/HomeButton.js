import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";


const HomeButton = ({ navigation }) => {
  return (
    <Link to={'/'}>
      <Button
        title="Home"
        style={buttonHome}>
        <Icon style={{
          resizeMode: "contain",
          height: 50,
          width: 50,
        }}
          icon="mdi:home"
        />
        <h3>Home</h3>
      </Button>
    </Link>

  );

}


const buttonHome = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  position: 'relative',
  marginLeft: 250
}

export default HomeButton;

