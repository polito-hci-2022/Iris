import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import BackpackExercise from "../../components/exercise/BackpackExercise";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";
import StudyButton from "../../components/common/StudyButton";

const Exercise = ({ navigation }) => {

    const [message, setMessage] = useState("Cosa mettiamo nello zaino?");

    return (
        <>
            {/* TOP SECTION: IRIS, message and RoundButton Back */}
            <Container>
                <Row>
                    <Col>
                        <Bubble text={message} />
                        <IrisModel scale={2} top={150} left={0} />
                        <StudyButton style={buttonStudyCompact} iconStyle={iconStyle} />
                    </Col>
                </Row>
            </Container>

            {/* BOTTOM SECTION: Exercise */}
            <BackpackExercise setMessage={setMessage} />
        </>
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