import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import { Palette } from '../../Palette';

const navbarStyle = Palette.navbarStyle;

const PlayMenu = () => {
  return (
    <div style={{ backgroundColor: Palette.backgroundColor }}>
      <Container fluid className="vh-100">
        <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
          <Col sx={4} />
          <Col sx={4}>
            <h1 className="ps-2">Gioca</h1>
          </Col>
          <Col sx={4} />
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
            <Bubble
              text="In questa pagina puoi trovare un sacco di giochi divertenti!"
              right={'0%'}
              top={'0%'}
            />
            <IrisModel
              scale={3}
              top={'12%'}
              left={'45%'}
            />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '45%' }} className="vw-100" >
          <hr />
          <Col>
            <h2>Giochi</h2>
            <RoundButton
              dimension={100}
              link={"/tutorialMemoryChoice"}
              title={"Memory"}
              text={"Memory"}
            />
          </Col>
        </Row>
        <Row style={{ position: 'absolute', top: '65%' }} className="vw-100" >
          <hr className='mt-5' />
          <Col>
            <h2>Storie</h2>
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
