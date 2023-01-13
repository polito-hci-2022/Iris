import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import StudyButton from '../../components/common/StudyButton';
import { useState, useEffect } from "react";
import { Keyboard, TextInput } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Link } from 'react-router-dom';
import Form from './Form'

const Translate = ({ navigation }) => {
  return (
    <Container style={{ flex: 1 }}>
      <Row>
        <Col>
          <h1>Study Time</h1>
          <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!" />
          <IrisModel scale={2} top={150} left={0} />
          <StudyButton style={buttonStudyCompact} iconStyle={iconStyle} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form></Form>
        </Col>
      </Row>
      <Link to={"/resultTranslate"}>
        <Button title="Translate">Translate</Button>
      </Link>
    </Container>
  );
}


const buttonStudyCompact = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  position: "relative",
  marginLeft: 300,
  marginTop: 0
}

const iconStyle = {
  resizeMode: "contain",
  height: 50,
  width: 50,
}

export default Translate;