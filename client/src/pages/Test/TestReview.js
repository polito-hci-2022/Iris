import { Container, Col, Row, Card } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import RoundButton from "../../components/common/RoundButton";

const TestReview = (props) => {

    const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
    const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";
    const message = "Hai già completato il test. Qui puoi vedere le risposte che hai dato e le soluzioni!"
    const color1 = props.testResults.Answer1 === "CASTLE" ? 'text-success' : 'text-danger';
    const color2 = props.testResults.Answer2 === "RABBIT" ? 'text-success' : 'text-danger';
    const navbarStyle = { backgroundColor: "#9E7676", borderColor: "#9E7676", color: "white" };


    return (
        <Container fluid className="vh-100" style={{ backgroundColor: "#FFF8EA" }}>
            <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
                <Col className="col-3" />
                <Col className="col-6 ms-2" >
                    <h1>Test Review</h1>
                </Col>
                <Col className="col-3" />
            </Row>

            {/* UPPER PART: Iris, Bubble and Back button */}
            <Container>
                <Row>
                    <Col>
                        <Bubble text={message} right={'0%'} top={"0%"} />
                        <IrisModel scale={3} top={'12%'} left={'45%'} />
                        <RoundButton dimension={75} position={'absolute'} top={'35%'} left={'3%'} link={"/studytime"} title={"Back"} text={"Esci"} />
                    </Col>
                </Row>
            </Container>

            {/* LOWER PART: test results */}
            <Container style={{ position: 'absolute', top: "48%", left: "2.5%", width: "95%" }} >
                <Row>
                    <Card className="my-2" style={{ backgroundColor: "#FFF8EA", borderColor: "#594545", color: "#594545" }} >
                        <Card.Header style={{ backgroundColor: "#FFF8EA", borderColor: "#594545", color: "#594545" }} >Domanda 1</Card.Header>
                        <Card.Body>
                            <Card.Title>{textQuestion1}</Card.Title>
                                <h5>La tua risposta: <b className={color1} >{props.testResults.Answer1}</b></h5>
                                <h5>Risposta esatta: CASTLE</h5>
                        </Card.Body>
                    </Card>
                </Row>
                <Row >
                    <Card className="my-1" style={{ backgroundColor: "#FFF8EA", borderColor: "#594545", color: "#594545" }} >
                        <Card.Header style={{ backgroundColor: "#FFF8EA", borderColor: "#594545", color: "#594545" }} >Domanda 2</Card.Header>
                        <Card.Body>
                            <Card.Title>{textQuestion2}</Card.Title>
                                <h5>La tua risposta: <b className={color2} >{props.testResults.Answer2}</b></h5>
                                <h5>Risposta esatta: RABBIT</h5>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </Container>
    );
}

export default TestReview;