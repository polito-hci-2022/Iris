import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';

const PlayMenu = () => {

  return (
    <div style={{ backgroundColor: "#FFF8EA" }}>
      <Container fluid className="vh-100 d-flex">
        <Row className="h-100">
          <Col>
            <h1>Play</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <RoundButton
              dimension={75}
              position={'absolute'}
              top={'30%'}
              left={'3%'}
              link={"/"}
              title={"Back"}
              text={"Esci"}
            />
          </Col>
          <Col>
            <Bubble text="In questa pagina puoi trovare un sacco di giochi divertenti!" color={'#c4baff'} />
            <IrisModel scale={3} top={'12%'} left={'45%'} />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '45%' }}>
          <Col>
            <h2>Games</h2>
            <RoundButton
              dimension={100}
              link={"/tutorialMemoryChoice"}
              title={"Memory"}
              text={"Memory"}
            />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '65%' }}>
          <Col>
            <h2>Stories</h2>
            <RoundButton
              dimension={100}
              link={"/castleStory1"}
              title={"Castle"}
              text={"Il Castello"}
            />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default PlayMenu;
