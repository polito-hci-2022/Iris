import { Container, Col, Row } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'

const TestReview = (props) => {

    const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
    const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";
    const message = "Hai già completato il test. Qui puoi vedere le risposte che hai dato e le soluzioni!"


    return (
        <>
            {/* UPPER PART: Iris, Bubble and Back button */}
            <Container>
                <Row>
                    <Col>
                        <Bubble text={message} />
                        <IrisModel scale={3} top={175} left={0} />
                        <RoundButton dimension={75}  position={'absolute'} top={'30%'} left={'1%'} link={"/studytime"} title={"Back"} text={"Back"} />
                    </Col>
                </Row>
            </Container>

            {/* LOWER PART: test results */}
            <Container>
                <Row>
                    <h3>Domanda 1: {textQuestion1}</h3>
                </Row>
                <Row>
                    <Col>
                        <h4>La tua risposta: {props.testResults.Answer1}</h4>
                    </Col>
                    <Col>
                        <h4>Risposta esatta: CASTLE</h4>
                    </Col>
                </Row>
                <Row>
                    <h3>Domanda 2: {textQuestion2}</h3>
                </Row>
                <Row>
                    <Col>
                        <h4>La tua risposta: {props.testResults.Answer2}</h4>
                    </Col>
                    <Col>
                        <h4>Risposta esatta: RABBIT</h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TestReview;