import { Container, Col, Row } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from "../../components/common/RoundButton";

const TestReview = (props) => {

    const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
    const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";
    const message = "Hai già completato il test. Qui puoi vedere le risposte che hai dato e le soluzioni!"
    const color1 = props.testResults.Answer1 === "CASTLE" ? 'text-success': 'text-danger';
    const color2 = props.testResults.Answer2 === "RABBIT" ? 'text-success': 'text-danger';


    return (
        <Container fluid className="vh-100" style={{ backgroundColor: "#7cb518" }}>
            {/* UPPER PART: Iris, Bubble and Back button */}
            <Container>
                <Row>
                    <Col>
                        <Bubble text={message} left={'0%'} />
                        <IrisModel scale={3}  top={'12%'} left={'45%'} />
                        <RoundButton dimension={75}  position={'absolute'} top={'35%'} left={'3%'} link={"/studytime"} title={"Back"} text={"Esci"} />
                    </Col>
                </Row>
            </Container>

            {/* LOWER PART: test results */}
            <Container style={{ position:'absolute', top:"48%", left:"2.5%", width:"95%" }} >
                <Row>
                    <h3>Domanda 1: {textQuestion1}</h3>
                </Row>
                <Row>
                    <Col>
                        <h4>La tua risposta:</h4>
                        <h4 className={color1} >{props.testResults.Answer1}</h4>
                    </Col>
                    <Col>
                        <h4>Risposta esatta:</h4>
                        <h4>CASTLE</h4>
                    </Col>
                </Row>
                <Row>
                    <h3><br/>Domanda 2: {textQuestion2}</h3>
                </Row>
                <Row>
                    <Col>
                        <h4>La tua risposta:</h4>
                        <h4 className={color2} >{props.testResults.Answer2}</h4>
                    </Col>
                    <Col>
                        <h4>Risposta esatta:</h4>
                        <h4>RABBIT</h4>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TestReview;