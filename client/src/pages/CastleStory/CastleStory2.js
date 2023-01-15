import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import SquareButton from '../../components/common/SquareButton';

function CastleStory2(){
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
              bottom={10}
              left={10}
              link={'/CastleStory'}
            />
          </Col>
          <Col>
            <IrisModel
              scale={3}
              right={50}
              bottom={10}
              position='absolute'
            />
            <Bubble
              text='You need to enter in the castle. Where do you go?'
              position='absolute'
              orientation='right'
              bottom={250}
              right={10}
            />
            <SquareButton
              text='Left'
              position='absolute'
              dimension={75}
              bottom={10}
              left={100}
              link={'/CastleStory3'}
              title={'CastleStory3'}
            />
            <SquareButton
              text='Right'
              position='absolute'
              dimension={75}
              bottom={10}
              left={200}
              link={'/CastleStory4'}
              title={'CastleStory4'}
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
              text='Play'
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
              link='/CastleStory2'
              bottom={10}
              right={10}
            />
          </Col>
        </Row>
      </Container>
    );
   
}

export default CastleStory2;
