import * as React from 'react';
import { Container,  Row } from 'react-bootstrap';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import home from './home.png'
import Figure from 'react-bootstrap/Figure';
import RoundButton from '../../components/common/RoundButton';



const Translate = ({ navigation, text }) => {
  return (
    <Container style={{ flex: 1 }}>
      <h1>Study Time</h1>
      <Row>
        <Bubble text="Right here, the result!" />
        <IrisModel scale={2} top={150} left={0} />
        <RoundButton dimension={75} link={"/studyTime"} title={"Back"} text={"Back"} />
      </Row>
      <Row>
        <h1>CASA - HOME</h1>
        <Figure.Image src={home} width={150} height={150} />
      </Row>
    </Container>
  );
}

/*
const iconStyle = {
  resizeMode: "contain",
  height: 50,
  width: 50,
}

const buttonStudyCompact = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 200,
}
*/

export default Translate;