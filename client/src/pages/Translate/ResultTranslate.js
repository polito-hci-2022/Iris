import * as React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import home from './home.png'
import Figure from 'react-bootstrap/Figure';
import RoundButton from '../../components/common/RoundButton';
import { Palette } from '../../Palette';

const navbarStyle = Palette.navbarStyle;

const Translate = () => {
  return (
    <div style={{ backgroundColor: Palette.backgroundColor }}>
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
            <Bubble text="Ecco la traduzione di 'HOME'!" right={'0%'} top={'0%'} />
            <IrisModel scale={3} top={'12%'} left={'45%'} />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '50%' }} >
          <Col className="vw-100">
            <Form.Control type="text" value={"HOME = CASA"} readOnly className="py-4 me-5" />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '60%', alignItems: 'align-center' }}>
          <Figure.Image
            src={home}
            width={300}
            height={300}
            className="ms-4 mt-5"
          />
          <RoundButton
            dimension={75}
            position={"absolute"}
            bottom={-50}
            left={"70%"}
            link={"/translate"}
            title={"Translate"}
            text={"Traduci ancora"} />
        </Row>
      </Container>
    </div>
  );
}

export default Translate;