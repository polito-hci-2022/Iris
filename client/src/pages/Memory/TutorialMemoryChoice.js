import * as React from 'react';
import { Button, Container} from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import RoundButton from '../../components/common/RoundButton';
import Bubble from '../../components/common/Bubble'

const TutorialMemoryChoice  = ({navigation}) => {  
    return (
        <Container>

          <h1>Play</h1>
          <Bubble text={"Do you need the tutorial?"}/>
          <IrisModel scale={3} top={175} left={0} />
          <RoundButton dimension={75} link={"/"} title={"Back"} text={"Back"} />


          <RoundButton dimension={125} top={125} left={125} link={"/tutorialMemory"} title={"Yes"} text={"Yes"} />
          <RoundButton dimension={125} top={125} left={125} link={"/Memory"} title={"No"} text={"No"} />

      </Container>   
    );
  }


export default TutorialMemoryChoice;