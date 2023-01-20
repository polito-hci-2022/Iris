import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Link } from 'react-router-dom';
import Form from './Form'
import RoundButton from '../../components/common/RoundButton';

const Translate = () => {
  return (
    <div style={{backgroundColor: "#FFF8EA"}} >
     <Container fluid className="vh-100 d-flex">
      <Row className="h-100">
        <Col>
            <h1>Translate</h1>
          </Col>
      </Row>
      <Row>
        <Col>
          <RoundButton dimension={75}  position={'absolute'} top={'35%'} left={'3%'}  link={"/studyTime"} title={"Back"} text={"Esci"} />
        </Col>
        <Col>
          <Bubble text="Scrivi qui la parola che non conosci. Ci penso io!" right={'0%'} />
            <IrisModel  scale={3} top={'12%'} left={'45%'} />
        </Col>
      </Row>
        <Row style={{position: 'absolute', top:'50%', width: '100%'}}>
            <Form></Form>
        </Row>
        <Row>
        <Col>          
          <RoundButton dimension={125}  position={'absolute'} left={'35%'} top={'65%'} link={"/resultTranslate"} title={"Translate"} text={"Traduci"} />
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