import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import RoundButton from '../../components/common/RoundButton';
import { Palette } from '../../Palette';

let text = "";
const navbarStyle = Palette.navbarStyle;

const TutorialMemoryChoice = ({ memory }) => {
  if (memory === 1)
    text = "Hai già giocato a Memory, vuoi rifare il tutorial?"
  else
    text = "Ciao, è la prima volta che giochi: vuoi fare un tutorial?"
  return (
    <div style={{ backgroundColor: Palette.backgroundColor }}>
      <Container fluid className="vh-100">
        <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
          <Col sx={4} />
          <Col sx={4}>
            <h1>Memory</h1>
          </Col>
          <Col sx={4} />
        </Row>
        <Row>
          <Col xs={12} style={{ width: '90%' }} className="mt-5 ms-4 ps-2 me-3" >
            <h4>{text}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <RoundButton dimension={75} position={'absolute'} top={'27%'} left={'3%'} link={"/play"} title={"Back"} text={"Esci"} />
          </Col>
          <Col>
            <IrisModel scale={4} top={'55%'} left={'25%'} />
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <RoundButton dimension={125} left={'20%'} top={"150%"} link={"/tutorialMemory"} title={"Yes"} text={"Sì"} />

          </Col>
          <Col className="col-6">
            <RoundButton dimension={125} left={'5%'} top={"150%"} link={"/Memory"} title={"No"} text={"No"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default TutorialMemoryChoice;