import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';



const MemoryButton = ({ iconStyle, style }) => {
  return (
    <Link to="/memory">
      <Button
        title="Memory"
        style={style}>
        <Icon style={iconStyle}
          icon="mdi:puzzle"
        />
        <h3>Memory</h3>
      </Button>
    </Link>
  );

}



export default MemoryButton;
