import * as React from 'react';
import { useState } from 'react';
import IrisModel from '../../models/IrisModel';
import Game from '../../components/memory/Game';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Palette } from '../../Palette';

const navbarStyle = Palette.navbarStyle;

const Memory = () => {

  const [finish, setFinish] = useState(false);
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
          <Col>
            <RoundButton dimension={75} position={'absolute'} top={'30%'} left={'3%'} onClick={() => setFinish(true)} title={"Back"} text={"Esci"} />
          </Col>
          <Col>
            <Bubble text={"Ecco il memory!"} color={'#c4baff'} left={'0%'} top={'0%'} />
            <IrisModel scale={3} top={'8%'} left={'45%'} />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '35%' }}>
          <Col>
            <Game />
          </Col>
        </Row>

        {/* Alert */}
        <Modal show={finish} className='vw-100'>
          <Modal.Body>
            <h3>Sei sicuro?</h3>
            Se esci non potrai continuare questa partita.
          </Modal.Body>
          <Modal.Footer>
            <RoundButton dimension={75} link={"/play"} title={"Yes"} text={"Sì"} />
            <RoundButton dimension={75} onClick={() => setFinish(false)} title={"No"} text={"No"} />
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Memory;
