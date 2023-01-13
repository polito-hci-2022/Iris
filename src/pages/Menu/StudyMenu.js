import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import HomeButton from '../../components/common/HomeButton';
import TranslateButton from '../../components/menu/TranslateButton';
import CastleTestButton from '../../components/menu/CastleTestButton';
import BackpackButton from '../../components/menu/BackpackButton';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'

const StudyMenu = ({ navigation }) => {
  return (
    <Container style={{ flex: 1 }}>
      <Row>
        <Col>
          <h1>Study Time</h1>
          <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!" />
          <IrisModel scale={2} top={150} left={0} />
          <HomeButton navigation={navigation} />
        </Col>
      </Row>
      <Row>
        <h2> Exercises </h2>
        <Col md="auto">
          <TranslateButton style={buttonTranslate} iconStyle={iconStyle}/>
          <BackpackButton style={buttonBackpack} iconStyle={iconStyle}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Test</h2>
          <CastleTestButton style={buttonCastleTest} iconStyle={iconStyle}/>
        </Col>
      </Row>
    </Container>
  );
}

const buttonTranslate = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20,
}

const buttonBackpack = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20
}

const buttonCastleTest = {
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

export default StudyMenu;
