import * as React from 'react';
import { Button, Container, ImageBackground, Row, Col } from 'react-bootstrap';
import StudyButton from '../../components/common/StudyButton';
import { useState, useEffect } from "react";
import { Keyboard, TextInput } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import home from './home.png'
import Figure from 'react-bootstrap/Figure';




const Translate = ({ navigation, text }) => {
  return (
    <Container style={{ flex: 1 }}>
      <h1>Study Time</h1>
      <Row>
        <Bubble text="Right here, the result!" />
        <IrisModel scale={2} top={150} left={0} />
        <StudyButton style={buttonStudyCompact} iconStyle={iconStyle} />
      </Row>
      <Row>
        <h1>CASA - HOME</h1>
        <Figure.Image src={home} width={150} height={150} />
      </Row>
    </Container>
  );
}

const iconStyle = {
  resizeMode: "contain",
  height: 50,
  width: 50,
}

const buttonStudyCompact = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 200,
}

export default Translate;