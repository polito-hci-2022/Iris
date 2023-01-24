import * as React from 'react';
import { Button, } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const CastleTestButton = ({ iconStyle, style }) => {
  return (
    <Link to="/testDisclaimer">
      <Button
        title="Castle Test"
        style={style}>
        <Icon style={iconStyle}
          icon="mdi:castle"
        />
        <h3>Castle Test</h3>
      </Button>
    </Link>
  );

}



export default CastleTestButton;
