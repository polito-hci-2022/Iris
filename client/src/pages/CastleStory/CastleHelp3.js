import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import RoundButton from '../../components/common/RoundButton';
import HelpTile from '../../components/story/HelpTile';
import RabbitModel from '../../models/RabbitModel'

function CastleHelp3() {
    // 'You meet a rabbit. He will show you the entry for the castle!'
    return (
      <Container fluid>
        <Row>
            <Col>
                <CastleModel position={[-100,30,0]}/>
                <RabbitModel
                    scale={1.5}
                    position={'absolute'}
                    top={50}
                    left={180}
                />
            </Col>
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
          <HelpTile 
            text_en={'You meet a rabbit'}
            text_it={'Incontri un coniglio'}
            position='absolute'
            width={100}
            height={120}
            bottom={300}
            left={30}
          />
          <HelpTile
            text_en={'He will show you'}
            text_it={'Lui ti mostrerà'}
            position='absolute'
            width={140}
            height={120}
            bottom={300}
            left={150}
          />
          <HelpTile
            text_en={'the entry'}
            text_it={"l'entrata"}
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
            text_en={'for the castle'}
            text_it={'per il castello'}
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
              title='Play'
              link='/play'
              text='Exit'
            />
            <RoundButton
              dimension={75}
              text={'Done'}
              position={'absolute'}
              link='/CastleStory3'
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

export default CastleHelp3;
