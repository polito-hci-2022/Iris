import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const PlayButton = ({ style, iconStyle }) => {
  return (
    <Link to="/play">
      <Button
        title="Play"
        style={style}>
        <Icon style={iconStyle}
          icon="mdi:puzzle"
        />
        <h1>Play</h1>
      </Button>
    </Link>
  );

}


export default PlayButton;
