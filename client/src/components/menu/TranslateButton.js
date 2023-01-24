import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const TranslateButton = ({ iconStyle, style }) => {
  return (
    <Link to={"/translate"}>
      <Button
        title="Translate"
        style={style}>
        <Icon style={iconStyle}
          icon="mdi:translate"
        />
        <h3>Translate</h3>
      </Button>
    </Link>

  );

}

export default TranslateButton;
