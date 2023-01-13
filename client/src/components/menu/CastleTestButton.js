import * as React from 'react';
import { Button, } from 'react-bootstrap';
import { Icon } from "@iconify/react";


const CastleTestButton = ({ iconStyle, style }) => {
  return (
    <Button
      title="Castle Test"
      style={style}>
      <Icon style={iconStyle}
        icon="mdi:castle"
      />
      <h3>Castle Test</h3>
    </Button>
  );

}



export default CastleTestButton;
