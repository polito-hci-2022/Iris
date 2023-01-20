import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';

const StudyMenu = (props) => {
  return (
    <div style={{backgroundColor: "#FFF8EA"}}>
     <Container fluid className="vh-100 d-flex">
     <Row className="h-100">
          <Col>
            <h1>Study Time</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Bubble
              text="In questa pagina ci sono i compiti assegnati, sono qui per aiutarti!"
              right={'0%'}
              color={'#7cb518'}
              />
            <IrisModel
              scale={3}
              top={'12%'}
              left={'45%'}
              />
          </Col>
          <Col>
            <RoundButton
              dimension={75}
              position={'absolute'}
              top={'30%'}
              left={13}
              link={"/"}
              title={"Back"}
              text={"Indietro"}
              />
          </Col>
        </Row>
        <Row style={{position: 'absolute', top:'45%'}}>
          <h2> Exercises </h2>
          <Col md="auto">
            <RoundButton
              dimension={100}
              link={"/translate"}
              title={"Translate"}
              text={"Traduttore"}
              />
            <RoundButton
              dimension={100}
              left={'10%'}
              link={"/backpack"}
              title={"Backpack"}
              text={"Lo Zaino"}
              />
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

export default StudyMenu;
