import * as React from "react";
import {Col, Container, Row} from "react-bootstrap"
import RoundButton from "../../components/common/RoundButton";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";

function Home() {
    return (
      <div style={{backgroundColor: "#bde0fe"}}>
       <Container fluid className="vh-100 d-flex">
            <Row className="h-100">
              <Col>
              <Bubble text={"Ciao Filippo, sono Iris!"} color={"#bde0fe"}/>
              <IrisModel scale={4} top={'12%'} left={'45%'}></IrisModel>
              </Col>
            </Row>
           {/*end top part*/}
            <Row>
              <Col>
                <RoundButton dimension={150} top={'75%'} left={'10%'} link={"/play"} title={"Play"} text={"Play"} />
              </Col>
              <Col>
                <RoundButton dimension={150} top={'75%'} left={'20%'} link={"/studyTime"} title={"Study"} text={"Study"} />
              </Col>
            </Row>
        </Container>
      </div>
    );
  }

/*
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
*/

export default Home;
