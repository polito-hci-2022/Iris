import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import RabbitModel from '../../models/RabbitModel'

function CastleStory4() {
    return (
      <Container fluid>
        <Row>
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
              text={'Prev'}
              position={'absolute'}
              link={'/CastleStory2'}
              bottom={10}
              left={10}
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
              text='You meet a rabbit. He will show you the entry for the castle!'
              position='absolute'
              orientation='right'
              bottom={250}
              right={10}
            />
          </Col>
          <Col>
            <RoundButton
              dimension={75}
              position={'absolute'}
              bottom={300}
              right={10}
              title='Play'
              link='/play'
              text='Exit'
            />
            <RoundButton
              dimension={75}
              text={'Help'}
              position={'absolute'}
              link=''
              right={10}
              bottom={150}
            />
            <RoundButton
              dimension={75}
              text={'Next'}
              position={'absolute'}
              link='/CastleStory5'
              bottom={10}
              right={10}
            />
          </Col>
        </Row>
      </Container>
    );
}

export default CastleStory4;
