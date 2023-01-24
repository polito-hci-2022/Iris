import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import RoundButton from '../../components/common/RoundButton';
import HelpTile from '../../components/story/HelpTile';
import { Palette } from '../../Palette';

function CastleHelp1() {
  return (
    <div style={{ backgroundColor: Palette.backgroundColor }}>
      <Container fluid className="vh-100 d-flex">
        <Row className="h-100">
          <Col><CastleModel position={[0, 35, 120]} /></Col>
        </Row>
        <Row>
          <Col>
            <RoundButton
              dimension={75}
              text={'Indietro'}
              position={'absolute'}
              disabled={true}
              bottom={10}
              left={10}
              title='Prev'
            />
          </Col>
          <Col>
            <HelpTile
              text_en={'Far far away'}
              text_it={'Molto molto lontano'}
              position='absolute'
              width={100}
              height={120}
              bottom={300}
              left={30}
            />
            <HelpTile
              text_en={'in a beautiful castle'}
              text_it={'in un bel castello'}
              position='absolute'
              width={140}
              height={120}
              bottom={300}
              left={150}
            />
            <HelpTile
              text_en={'there is'}
              text_it={"c'è"}
              position='absolute'
              width={100}
              height={50}
              bottom={230}
              left={30}
            />
            <HelpTile
              text_en={'a party'}
              text_it={'una festa'}
              position='absolute'
              width={100}
              height={80}
              bottom={130}
              left={30}
            />
            <HelpTile
              text_en={'for the princess birthday'}
              text_it={'per il compleanno della principessa'}
              position='absolute'
              width={140}
              height={150}
              bottom={130}
              left={150}
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
              text={'Fatto'}
              position={'absolute'}
              link='/CastleStory1'
              right={10}
              bottom={150}
              title='Done'
            />
            <RoundButton
              dimension={75}
              text={'Avanti'}
              position={'absolute'}
              link='/CastleStory2'
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

export default CastleHelp1;
