import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import RabbitModel from '../../models/RabbitModel'
import SquareButton from '../../components/common/SquareButton';

function CastleStory5() {
    return (
      <div style={{backgroundColor: "#FFF8EA"}}>
        <Container fluid className="vh-100 d-flex">
          <Row className="h-100">
            <Col>
              <CastleModel position={[0,30,30]}/>
              <RabbitModel
                scale={0.8}
                position={'absolute'}
                top={-180}
                left={120}
              />
            </Col>
        </Row>
        <Row>
          <Col>
            <RoundButton
              dimension={75}
              text={'Indietro'}
              position={'absolute'}
              link={'/CastleStory2'}
              bottom={10}
              left={10}
              title='Prev'
            />
          </Col>
          <Col>
            <IrisModel
              scale={3}
              right={50}
              bottom={50}
              position='absolute'
            />
            <Bubble
              text='Look! He is next to the door, we are arrived!'
              position='absolute'
              orientation='right'
              bottom={250}
              right={10}
              color={"#c4baff"}

            />
            <SquareButton
              text='Ancora'
              position='absolute'
              dimension={75}
              bottom={10}
              left={100}
              link={'/CastleStory1'}
              title={'Restart'}
            />
            <SquareButton
              text='Esci'
              position='absolute'
              dimension={75}
              bottom={10}
              left={200}
              link={'/Play'}
              title={'Play'}
            />
          </Col>
          <Col>
            <RoundButton
              dimension={75}
              text={'Aiuto'}
              position={'absolute'}
              link='/CastleHelp5'
              right={10}
              bottom={150}
              title='Help'
            />
            <RoundButton
              dimension={75}
              text={'Avanti'}
              position={'absolute'}
              disabled={true}
              bottom={10}
              right={10}
              title='Next'
            />
          </Col>
        </Row>
      </Container>
      </div>
    );
}

export default CastleStory5;
