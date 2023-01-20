import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import BackpackExercise from "../../components/exercise/BackpackExercise";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";
import RoundButton from "../../components/common/RoundButton";
import { Palette } from '../../Palette';

const navbarStyle = Palette.navbarStyle;

const Exercise = () => {

    const [message, setMessage] = useState("Cosa mettiamo nello zaino?");

    return (
        <>
            <Container fluid className="vh-100 vw-100" style={{ backgroundColor: Palette.backgroundColor }}>
                <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
                    <Col sx={4} />
                    <Col sx={4}>
                        <h1>Lo zaino</h1>
                    </Col>
                    <Col sx={4} />
                </Row>
                <Row className="h-100">
                    <Col>
                        <Bubble text={message} right={'0%'} top={'0%'} />
                        <IrisModel scale={3} top={'10%'} left={'45%'} />
                        <RoundButton dimension={75} position={'absolute'} top={'30%'} left={'3%'} link={"/studyTime"} title={"Back"} text={"Esci"} />
                    </Col>
                </Row>
                <Row style={{ position: 'absolute', top: '41%' }}>
                    <Col>
                        <BackpackExercise setMessage={setMessage} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Exercise;