import * as React from 'react';
import { Container } from 'react-bootstrap';
import CastleModel from '../../models/CastleModel'
import IrisModel from '../../models/IrisModel';
import PlayButton from '../../components/common/PlayButton';
import Bubble from '../../components/common/Bubble'
import ButtonStory from '../../components/story/ButtonStory';
import { useNavigate } from "react-router-dom";

function CastleStoryFinal () {
    
    const navigate = useNavigate()

    return (

    <Container fluid>

      <Container >

          <Container > <CastleModel position={[0,35,120]}/></Container>
          <Container ></Container>
        <Container >
          <Bubble
            text='Far far away, in a beautiful castle, there is a party for the princess birthday.'
            position='relative'
            orientation='left'/>
          <IrisModel scale={4} left={0} top={0} position={'relative'}/>
        </Container>
        <Container >
          <PlayButton
            
            position={'absolute'}
            bottom={250}
            right={10}
            />
          <ButtonStory
            text={'Next'}
            position={'absolute'}
            onPress={() => navigate("")}
            disabled={true}
            bottom={10}
            right={10}
            />
          <ButtonStory
            text={'Prev'}
            position={'absolute'}
            onPress={() => navigate("/CastleStory4")}
            bottom={10}
            left={10}
          />
          <ButtonStory
            text={'Help'}
            position={'absolute'}
            onPress={() => ("")}
            right={10}
            bottom={150}
          />
        </Container>
      </Container>
    </Container>
    );
   
}

export default CastleStoryFinal;