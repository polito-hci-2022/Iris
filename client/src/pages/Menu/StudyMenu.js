import * as React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';

const StudyMenu = (props) => {

  const navbarStyle = { backgroundColor: "#9E7676", borderColor: "#9E7676", color: "white" };

  return (
    <div style={{ backgroundColor: "#FFF8EA" }}>
      <Container fluid className="vh-100">
        <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
          <Col sx={4} />
          <Col sx={4}>
            <h1 className="ps-2">Studia</h1>
          </Col>
          <Col sx={4} />
        </Row>
        <Row>
          <Col>
            <Bubble
              text="In questa pagina ci sono i compiti assegnati, sono qui per aiutarti!"
              right={'0%'}
              top={'0%'}
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
              left={'3%'}
              link={"/"}
              title={"Back"}
              text={"Esci"}
            />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '45%' }}>
          <hr />
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
          <hr className='mt-5' />
        </Row>
        <Row style={{ position: 'absolute', top: '65%' }} className='mt-5'>
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
