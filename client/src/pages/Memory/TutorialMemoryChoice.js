import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import RoundButton from '../../components/common/RoundButton';
import Bubble from '../../components/common/Bubble'

let text="";

const TutorialMemoryChoice  = ({memory}) => { 
  if(memory === 1)
    text= "You already did the memory, you want to do the tutorial?"
  else
    text="You are new here, do you need the tutorial? "
    return (
      <div style={{backgroundColor: "#c4baff"}}>
        <Container fluid className="vh-100 d-flex">
          <Row className="h-100">
            <Col>
              <h1>Memory</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <RoundButton dimension={75}  position={'absolute'} top={'30%'} left={'1%'} link={"/"} title={"Back"} text={"Back"} />
            </Col>
            <Col>        
              <Bubble text={text} color={'#c4baff'} />
              <IrisModel scale={3}  top={'12%'} left={'45%'}/>
            </Col>
          </Row>
          <Row style={{position: 'absolute', top:'45%'}}>
            <Col>
              <RoundButton dimension={125} link={"/tutorialMemory"} title={"Yes"} text={"Yes"} />
              <RoundButton dimension={125} link={"/Memory"} title={"No"} text={"No"} />
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }


export default TutorialMemoryChoice;