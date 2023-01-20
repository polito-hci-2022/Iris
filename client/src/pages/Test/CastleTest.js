import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Test1 from '../../components/test/Test1';
import Test2 from '../../components/test/Test2';
import RoundButton from '../../components/common/RoundButton';

const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";
const navbarStyle = { backgroundColor: "#9E7676", borderColor: "#9E7676", color: "white" };

const CastleTest = (props) => {

    const [message, setMessage] = useState(textQuestion1);
    const [question1, setQuestion1] = useState(true);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        //first time entered in the test: the test is considered done
        props.setTest(true);
    }, []);

    const moveNext = () => {
        setMessage(textQuestion2);
        setQuestion1(false);
    }

    const moveBack = () => {
        setMessage(textQuestion1);
        setQuestion1(true);
    }

    const submit = () => {
        setFinish(true);
    }

    return (
        <Container fluid className="vh-100 vw-100" style={{ backgroundColor: "#FFF8EA" }}>
            <Row className="vw-100 vh-10 pt-2" style={navbarStyle}>
                <Col className="col-3" />
                <Col className="col-6 ms-1" >
                    <h1>Castle Test</h1>
                </Col>
                <Col className="col-3" />
            </Row>

            {/* UPPER PART: Iris, Bubble and Back button */}
            <Container>
                <Row>
                    <Col>
                        <Bubble text={message} right={"0%"} top={"0%"} />
                        <IrisModel scale={3} top={'12%'} left={'45%'} />
                        <RoundButton dimension={75} position={'absolute'} top={'30%'} left={'3%'} onClick={() => submit()} title={"Back"} text={"Esci"} />
                    </Col>
                </Row>
            </Container>

            {/* LOWER PART: body */}
            <Container style={{ position: 'absolute', top: "45%" }}>
                {
                    question1
                        ? <Test1 testResults={props.testResults} setTestResults={props.setTestResults} />
                        : <Test2 testResults={props.testResults} setTestResults={props.setTestResults} />
                }
            </Container>

            {/* BOTTOM PART: buttons */}
            <Container>
                <Row>
                    <Col>
                        {
                            question1
                                ? false
                                : <RoundButton onClick={() => moveBack()} text="Indietro" position='absolute' dimension={75} bottom={10} left={'6%'} />
                        }
                    </Col>
                    <Col>
                        {
                            question1
                                ? <RoundButton onClick={() => moveNext()} text="Avanti" position='absolute' dimension={75} bottom={10} left={'75%'} />
                                : <RoundButton onClick={() => submit()} text="Fine" position='absolute' dimension={75} bottom={10} left={'75%'} />
                        }
                    </Col>
                </Row>
            </Container>

            {/* Alert */}
            <Modal show={finish} className='vw-100'>
                <Modal.Body>
                    <h3>Sei sicuro?</h3>
                    Se esci o consegni non potrai più modificare le tue risposte.
                </Modal.Body>
                <Modal.Footer>
                    <RoundButton dimension={75} link={"/studyTime"} title={"Yes"} text={"Sì"} />
                    <RoundButton dimension={75} onClick={() => setFinish(false)} title={"No"} text={"No"} />
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default CastleTest;