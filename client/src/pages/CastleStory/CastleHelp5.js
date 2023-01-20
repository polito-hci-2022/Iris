import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import RoundButton from '../../components/common/RoundButton';
import HelpTile from '../../components/story/HelpTile';
import RabbitModel from '../../models/RabbitModel'
import SquareButton from '../../components/common/SquareButton';
import { Palette } from '../../Palette';

function CastleHelp5() {
    // Look! He is next to the door, we are arrived!
    return (
      <div style={{backgroundColor: Palette.backgroundColor}}>
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
              disabled={true}
              bottom={10}
              left={10}
              title='Prev'
            />
          </Col>
          <Col>
          <HelpTile
            text_en={'We have arrived'}
            text_it={'Siamo arrivati'}
            position='absolute'
            width={100}
            height={120}
            bottom={300}
            left={30}
          />
          <HelpTile
            text_en={'He is next to the door'}
            text_it={'Lui è vicino alla porta'}
            position='absolute'
            width={140}
            height={120}
            bottom={300}
            left={150}
          />
          <HelpTile
            text_en={'Look!'}
            text_it={"Guarda!"}
            position='absolute'
            width={100}
            height={50}
            bottom={230}
            left={30}
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
              title={'Back'}
            />
          </Col>
          <Col>
            <RoundButton
              dimension={75}
              text={'Fatto'}
              position={'absolute'}
              link='/CastleStory5'
              right={10}
              bottom={150}
              title='Done'
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

export default CastleHelp5;
