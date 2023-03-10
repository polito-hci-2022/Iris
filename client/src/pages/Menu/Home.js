import * as React from "react";
import { Col, Container, Row } from "react-bootstrap"
import RoundButton from "../../components/common/RoundButton";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";
import { Palette } from '../../Palette';

function Home() {
  return (
    <div style={{ backgroundColor: Palette.backgroundColor }}>
      <Container fluid className="vh-100 d-flex">
        <Row className="h-100">
          <Col>
            <Bubble text={"Ciao Filippo, sono Iris, l'assistente della tua maestra di Inglese!"} left={'0%'} />
            <IrisModel scale={4} top={'12%'} left={'45%'}></IrisModel>
          </Col>
        </Row>
        <Row>
          <Col>
            <RoundButton dimension={150} top={'75%'} left={'10%'} link={"/play"} title={"Play"} text={"Gioca"} />
          </Col>
          <Col>
            <RoundButton dimension={150} top={'75%'} left={'20%'} link={"/studyTime"} title={"Study"} text={"Studia"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
