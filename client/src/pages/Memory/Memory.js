import * as React from 'react';
import IrisModel from '../../models/IrisModel';
import Game from '../../components/memory/Game';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import { Container } from 'react-bootstrap';

const Memory  = () => { 

    return (
      <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <h1>Memory</h1>
          <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!"/>
          <IrisModel scale={3}/>
          <RoundButton dimension={75} left={150} link={"/play"} title={"Back"} text={"Back"} />
          <Game></Game>
      </Container>
    );
  }

export default Memory;