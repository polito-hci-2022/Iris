import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Link } from 'react-router-dom';
import Form from './Form'
import RoundButton from '../../components/common/RoundButton';

const Translate = () => {

  const navbarStyle = { backgroundColor: "#9E7676", borderColor: "#9E7676", color: "white" };

  return (
    <div style={{ backgroundColor: "#FFF8EA" }} >
      <Container fluid className="vh-100">
        <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
          <Col sx={4} />
          <Col sx={4}>
            <h1>Traduttore</h1>
          </Col>
          <Col sx={4} />
        </Row>
        <Row>
          <Col>
            <RoundButton dimension={75} position={'absolute'} top={'35%'} left={'3%'} link={"/studyTime"} title={"Back"} text={"Esci"} />
          </Col>
          <Col>
            <Bubble text="Scrivi qui la parola che non conosci. Ci penso io!" right={'0%'} top={'0%'} />
            <IrisModel scale={3} top={'12%'} left={'45%'} />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '50%', width: '100%' }}>
          <Form></Form>
        </Row>
        <Row>
          <Col>
            <RoundButton dimension={125} position={'absolute'} left={'35%'} top={'65%'} link={"/resultTranslate"} title={"Translate"} text={"Traduci"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

/*
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
*/

export default Translate;