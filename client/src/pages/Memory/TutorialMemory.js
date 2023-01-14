import * as React from 'react';
import { Button, useState } from 'react';
import HomeButton from '../../components/common/HomeButton'
import RoundButton from '../../components/common/RoundButton';
import IrisModel from '../../models/IrisModel';
import Tutorial from '../../components/memory/Tutorial';
import Bubble from '../../components/common/Bubble'
import { Container } from 'react-bootstrap';
import API from '../../API';

const TutorialMemory  = ({setMemory, memory}) => {  

  const newMemory = async () => {
    await API.addMemory();
    setMemory(1)
  }
  newMemory();

  const [message,setMessage] = React.useState("Lo scopo del gioco è quello di trovare tutte le coppie nome-immagine. Clicca avanti per continuare!");
  
    return (
        <Container style={{ flex: 1}}>
          <h1>Play</h1>
          <Bubble text={message}/>
          <IrisModel/>
          <RoundButton dimension={75} link={"/"} title={"Back"} text={"Back"} />

          
        </Container>
    );
  }


export default TutorialMemory;