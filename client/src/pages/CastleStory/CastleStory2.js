import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import SquareButton from '../../components/common/SquareButton';

function CastleStory2(){
    return (
      <div style={{backgroundColor: "#FFF8EA"}}>
        <Container fluid className="vh-100 d-flex">
          <Row className="h-100">
            <Col><CastleModel position={[0,35,120]}/></Col>
        </Row>
        <Row>
          <Col>
            <RoundButton
              dimension={75}
              text={'Indietro'}
              position={'absolute'}
              bottom={10}
              left={10}
              link={'/CastleStory1'}
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
              text='You need to enter in the castle. Where do you go?'
              position='absolute'
              orientation='right'
              bottom={250}
              right={10}
              color={"#c4baff"}

            />
            <SquareButton
              text='Left'
              position='absolute'
              dimension={75}
              bottom={10}
              left={100}
              link={'/CastleStory3'}
              title={'Left'}
            />
            <SquareButton
              text='Right'
              position='absolute'
              dimension={75}
              bottom={10}
              left={200}
              link={'/CastleStory4'}
              title={'Right'}
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
              text='Esci'
            />
            <RoundButton
              dimension={75}
              text={'Aiuto'}
              position={'absolute'}
              link='/CastleHelp2'
              right={10}
              bottom={150}
              title='Help'
            />
            <RoundButton
              dimension={75}
              text={'Avanti'}
              disabled={true}
              position={'absolute'}
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

export default CastleStory2;
