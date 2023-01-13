import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import HomeButton from '../../components/common/HomeButton'
import MemoryButton from '../../components/menu/MemoryButton';
import CastleButton from '../../components/menu/CastleButton';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'

const PlayMenu = ({ navigation }) => {

  return (
    <Container style={{ flex: 1 }}>
      <Row>
        <Col>
          <h1>Play</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Bubble text="In this page you can find a lot of funny games!" />
          <IrisModel scale={3} top={175} left={0} />
          <HomeButton navigation={navigation} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Games </h2>
          <MemoryButton style={buttonMemory} iconStyle={iconStyle}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Stories</h2>
          <CastleButton style={buttonCastle} iconStyle={iconStyle}/>
        </Col>
      </Row>
    </Container>

  );
}

const buttonMemory = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20,
}

const buttonCastle = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20,
}

const iconStyle={
  resizeMode:"contain",
  height: 50,
  width: 50,
}


export default PlayMenu;