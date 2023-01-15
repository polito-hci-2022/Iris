import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';

function CastleStory1() {
    return (
      <Container fluid>
        <Row>
            <Col><CastleModel position={[0,35,120]}/></Col>
        </Row>
        <Row>
          <Col>
            <RoundButton
              dimension={75}
              text={'Prev'}
              position={'absolute'}
              disabled={true}
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
              text='Far far away, in a beautiful castle, there is a party for the princess birthday.'
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
              link='/CastleHelp1'
              right={10}
              bottom={150}
            />
            <RoundButton
              dimension={75}
              text={'Next'}
              position={'absolute'}
              link='/CastleStory2'
              bottom={10}
              right={10}
            />
          </Col>
        </Row>
      </Container>
    );
}

export default CastleStory1;