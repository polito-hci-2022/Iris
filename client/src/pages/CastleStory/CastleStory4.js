import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import RabbitModel from '../../models/RabbitModel'
import { Palette } from '../../Palette';

function CastleStory4() {
    return (
      <div style={{backgroundColor: Palette.backgroundColor}}>
        <Container fluid className="vh-100 d-flex">
          <Row className="h-100">
            <Col>
              <CastleModel position={[100,30,0]}/>
              <RabbitModel
                scale={1.5}
                position={'absolute'}
                top={50}
                left={80}
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
              text='You meet a rabbit. He will show you the entrance for the castle!'
              position='absolute'
              orientation='right'
              bottom={250}
              right={10}
              color={"#c4baff"}

            />
          </Col>
          <Col>
            <RoundButton
              dimension={75}
              position={'absolute'}
              bottom={300}
              right={10}
              title='Back'
              link='/play'
              text='Esci'
            />
            <RoundButton
              dimension={75}
              text={'Aiuto'}
              position={'absolute'}
              link='/CastleHelp4'
              right={10}
              bottom={150}
              title='Help'
            />
            <RoundButton
              dimension={75}
              text={'Avanti'}
              position={'absolute'}
              link='/CastleStory5'
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

export default CastleStory4;
