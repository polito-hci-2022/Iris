import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Link } from 'react-router-dom';
import Form from './Form'
import RoundButton from '../../components/common/RoundButton';

const Translate = () => {
  return (
    <div style={{backgroundColor: "#7cb518"}}>
     <Container fluid className="vh-100 d-flex">
      <Row className="h-100">
          <Col>
            <h1>Translate</h1>
          </Col>
      </Row>
      <Row>
        <Col>
          <RoundButton dimension={75}  position={'absolute'} top={'30%'} left={'1%'}  link={"/studyTime"} title={"Back"} text={"Back"} />
        </Col>
        <Col>
          <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!" />
            <IrisModel  scale={3} top={'12%'} left={'45%'} />
        </Col>
      </Row>
        <Row style={{position: 'absolute', top:'45%'}}>
          <Col>
            <Form></Form>
          </Col>
          <Link to={"/resultTranslate"}>
          <Button title="Translate">Translate</Button>
        </Link>
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