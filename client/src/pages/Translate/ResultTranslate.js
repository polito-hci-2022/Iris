import * as React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import home from './home.png'
import Figure from 'react-bootstrap/Figure';
import RoundButton from '../../components/common/RoundButton';



const Translate = () => {

  const navbarStyle = { backgroundColor: "#9E7676", borderColor: "#9E7676", color: "white" };

  return (
    <div style={{ backgroundColor: "#FFF8EA" }}>
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
          {/*
          <Col>
            <RoundButton dimension={75}  position={'absolute'} top={'35%'} left={'76%'}  link={"/translate"} title={"Translate"} text={"Traduci ancora"} />
          </Col>
          */}
          <Col>
            <Bubble text="Ecco la traduzione di 'HOME'!" right={'0%'} top={'0%'} />
            <IrisModel scale={3} top={'12%'} left={'45%'} />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '50%', alignItems: 'align-center' }} >
          <Container fluid>
            <Row>
          <Col className="col-1" ></Col>
          <Col className="col-7">
            <Form.Control type="text" value={"HOME = CASA"} readOnly className="py-4 ms-1" />
          </Col>
          <Col className="col-3">
            <RoundButton dimension={75} link={"/translate"} title={"Translate"} text={"Traduci ancora"} />
          </Col>
          <Col className="col-1" ></Col>
          </Row>
          </Container>
        </Row>
        <Row style={{ position: 'absolute', top: '60%', alignItems: 'align-center' }}>
          <Figure.Image
            src={home}
            width={300}
            height={300}
            className="ms-4 mt-5"
          />
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