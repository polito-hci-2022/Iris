import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';

const StudyMenu = (props) => {
  return (
    <div style={{backgroundColor: "#7cb518"}}>
     <Container fluid className="vh-100 d-flex">
     <Row className="h-100">
          <Col>
            <h1>Study Time</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!" right={'0%'} color={'#7cb518'}/>
            <IrisModel scale={3} top={'12%'} left={'45%'}/>
          </Col>
          <Col>
            <RoundButton dimension={75} position={'absolute'} top={'30%'} left={'1%'} link={"/"} title={"Back"} text={"Back"} />
          </Col>
        </Row>
        <Row style={{position: 'absolute', top:'45%'}}>
          <h2> Exercises </h2>
          <Col md="auto">
            <RoundButton dimension={100} link={"/translate"} title={"Translate"} text={"Translate"} />
            <RoundButton dimension={100} left={'10%'} link={"/backpack"} title={"Backpack"} text={"Backpack"} />
          </Col>
        </Row>
        <Row  style={{position: 'absolute', top:'65%'}}>
          <Col>
            <h2>Test</h2>
            {
              props.testDone 
                ? <RoundButton dimension={100} link={"/testReview"} title={"Castle"} text={"Castle Test"} />
                : <RoundButton dimension={100} link={"/testDisclaimer"} title={"Castle"} text={"Castle Test"} />
            }     
          </Col>
        </Row>
      </Container>
    </div>
  );
}

/*
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
*/

export default StudyMenu;
