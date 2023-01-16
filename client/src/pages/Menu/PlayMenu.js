import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';

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
          <RoundButton dimension={75} link={"/"} title={"Back"} text={"Back"} />

        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Games </h2>
          <RoundButton dimension={75} link={"/tutorialMemoryChoice"} title={"Memory"} text={"Memory"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Stories</h2>
          <RoundButton dimension={75} link={"/castleStory"} title={"Castle"} text={"Castle Story"} />

        </Col>
      </Row>
    </Container>

  );
}

/*
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
*/


export default PlayMenu;
