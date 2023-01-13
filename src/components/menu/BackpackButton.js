import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const BackpackButton  = ({ iconStyle, style }) => {  
  return (
    <Link to={'/backpackS'}>
    <Button 
      title="The Backpack"
      style={style}>
      <Icon style={iconStyle}
      icon="mdi:backpack"
      />
      <h3>The Backpack</h3>
  </Button>
    </Link>
      
  );

}



export default BackpackButton;
