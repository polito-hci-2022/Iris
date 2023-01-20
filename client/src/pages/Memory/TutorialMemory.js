import * as React from 'react';
import { useState } from 'react';
import RoundButton from '../../components/common/RoundButton';
import IrisModel from '../../models/IrisModel';
import Tutorial from '../../components/memory/Tutorial';
import Bubble from '../../components/common/Bubble'
import { Container, Row, Col } from 'react-bootstrap';
import API from '../../API';

const navbarStyle = { backgroundColor: "#9E7676", borderColor: "#9E7676", color: "white" };

const TutorialMemory = ({ setMemory, memory }) => {

  const newMemory = async () => {
    await API.addMemory();
    setMemory(1)
  }
  newMemory();

  const [message, setMessage] = useState("Lo scopo del gioco è quello di trovare tutte le coppie nome-immagine. Clicca avanti per continuare!");

  return (
    <div style={{ backgroundColor: "#FFF8EA" }}>
      <Container fluid className="vh-100">
        <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
          <Col sx={4} />
          <Col sx={4}>
            <h1>Memory</h1>
          </Col>
          <Col sx={4} />
        </Row>
        <Row>
          <Col>
            <RoundButton dimension={75} position={'absolute'} top={'35%'} left={'3%'} link={"/play"} title={"Back"} text={"Esci"} />
          </Col>
          <Col>
            <Bubble text={message} color={'#c4baff'} left={'0%'} top={'0%'} />
            <IrisModel scale={3} top={'12%'} left={'45%'} />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '45%' }}>
          <Col>
            <Tutorial message={message} setMessage={setMessage} ></Tutorial>

          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default TutorialMemory;