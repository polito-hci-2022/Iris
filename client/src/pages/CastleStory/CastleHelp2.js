import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import RoundButton from '../../components/common/RoundButton';
import SquareButton from '../../components/common/SquareButton';
import HelpTile from '../../components/story/HelpTile';

function CastleHelp2(){
    // 'You need to enter in the castle. Where do you go?'
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
            <HelpTile 
                text_en={'You need to enter'}
                text_it={'Devi entrare'}
                position='absolute'
                width={100}
                height={120}
                bottom={300}
                left={30}
            />
            <HelpTile
                text_en={'in the castle'}
                text_it={'nel castello'}
                position='absolute'
                width={140}
                height={120}
                bottom={300}
                left={150}
            />
            <HelpTile
                text_en={'Right'}
                text_it={'Destra'}
                position='absolute'
                width={100}
                height={50}
                bottom={230}
                left={30}
            />
            <HelpTile
                text_en={'Left'}
                text_it={'Sinistra'}
                position='absolute'
                width={100}
                height={80}
                bottom={130}
                left={30}
            />
            <HelpTile
                text_en={'Where do you go?'}
                text_it={'Dove vai?'}
                position='absolute'
                width={140}
                height={150}
                bottom={130}
                left={150}
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
              text='Esci'
            />
            <RoundButton
              dimension={75}
              text={'Fatto'}
              position={'absolute'}
              link='/CastleStory2'
              right={10}
              bottom={150}
              title='Done'
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

export default CastleHelp2;
