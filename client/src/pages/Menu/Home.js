import * as React from "react";
import {Col, Container, Row} from "react-bootstrap"
import RoundButton from "../../components/common/RoundButton";
import StudyButton from "../../components/common/StudyButton";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";

function Home() {
    return (
      <div>
       <Container fluid>
        <h1>Homepage</h1>
            <Row>
              <Col>
              <Bubble text={"jfsaoudhasoudhaso"}/>
              <IrisModel scale={3} top={175} left={0}></IrisModel>
              </Col>
            </Row>
           {/*end top part*/}
            <Row>
              <Col></Col>
              <Col>
                <RoundButton dimension={125} top={125} left={125} link={"/play"} title={"Play"} text={"Play"} />
                <StudyButton style={buttonStudy} iconStyle={iconStyle}/>
              </Col>
              <Col></Col>
            </Row>
        </Container>
      </div>
    );
  }

const buttonPlay = {
  width: 125,
  height: 125,
  borderRadius: 100,
  padding: 8,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "grey",
  position: "relative",
  marginTop: 200,
  marginLeft: 20
}

const buttonStudy = {
  width: 125,
  height: 125,
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
  borderRadius: 100,
  backgroundColor: "grey",
  position: "relative",
  marginLeft: 50
}

const iconStyle={
  resizeMode:"contain",
  height: 100,
  width:100,
}

export default Home;