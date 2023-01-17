import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import home from './home.png'
import Figure from 'react-bootstrap/Figure';
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
        <h1>CASA - HOME</h1>
        <Figure.Image 
          src={home}         
          width={171}
          height={180}
          alt="171x180"/>
      </Row>
    </Container>
    </div>
  );
}

/*
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
*/

export default Translate;