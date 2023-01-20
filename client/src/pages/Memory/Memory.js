import * as React from 'react';
import IrisModel from '../../models/IrisModel';
import Game from '../../components/memory/Game';
import Bubble from '../../components/common/Bubble'
import RoundButton from '../../components/common/RoundButton';
import { Container, Row, Col } from 'react-bootstrap';

const Memory  = () => { 


  
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
              <RoundButton dimension={75}  position={'absolute'} top={'30%'} left={'3%'} link={"/play"} title={"Back"} text={"Esci"} />
            </Col>
            <Col>        
              <Bubble text={"Ecco il memory!"} color={'#c4baff'} left={'0%'}/>
              <IrisModel scale={3}  top={'8%'} left={'45%'}/>
            </Col>
          </Row>
          <Row style={{position: 'absolute', top:'35%'}}>
            <Col>
              <Game/>
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }

export default Memory;


/**
 * 
 *       <div style={{backgroundColor: "#c4baff"}}>
      <Container fluid className="vh-100 d-flex">
        <Row className="h-100">
          <h1>Memory</h1>
          <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!"/>
          <IrisModel scale={3}/>
          <RoundButton dimension={75} left={150} link={"/play"} title={"Back"} text={"Back"} />
        </Row>
          <Game></Game>
      </Container>
      </div>
 */