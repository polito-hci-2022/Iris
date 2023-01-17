import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import BackpackExercise from "../../components/exercise/BackpackExercise";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";
import RoundButton from "../../components/common/RoundButton";

const Exercise = () => {
    {/* TOP SECTION: IRIS, message and RoundButton Back */}
    const [message, setMessage] = useState("Cosa mettiamo nello zaino?");

    return (
        <div style={{backgroundColor: "#7cb518"}}>
            <Container fluid className="vh-100 d-flex">
                <Row className="h-100">
                    <Col>
                        <Bubble text={message} right={'0%'} color={'#7cb518'}/>
                        <IrisModel scale={3} top={'12%'} left={'45%'}/>
                        <RoundButton dimension={75} position={'absolute'} top={'30%'} left={'1%'} link={"/studyTime"} title={"Back"} text={"Back"} />
                    </Col>
                </Row>
                <Row style={{position: 'absolute', top:'45%'}}>
                    <Col>
                    <BackpackExercise setMessage={setMessage} />

                    </Col>
                </Row>
            </Container>

            {/* BOTTOM SECTION: Exercise */}
        </div>
    );
}

const buttonStudyCompact = {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "grey",
    position: "relative",
    marginLeft: 300,
    marginTop: 0
}

const iconStyle = {
    resizeMode: "contain",
    height: 50,
    width: 50,
}

export default Exercise;