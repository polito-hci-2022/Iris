import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Test1 from '../../components/test/Test1';
import Test2 from '../../components/test/Test2';
import { useNavigate } from 'react-router-dom';

const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";

const CastleTest = (props) => {

    const navigate = useNavigate();

    const [message, setMessage] = useState(textQuestion1);
    const [question1, setQuestion1] = useState(true);

    const moveNext = () => {
        setMessage(textQuestion2);
        setQuestion1(false);
    }

    const moveBack = () => {
        setMessage(textQuestion1);
        setQuestion1(true);
    }

    const submit = () => {
        navigate('/studytime');
    }

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

            {/* LOWER PART: body */}
            <Container>
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
                                : <Button onClick={() => moveBack()} >Indietro</Button>
                        }
                    </Col>
                    <Col>
                        {
                            question1
                                ? <Button onClick={() => moveNext()}>Avanti</Button>
                                : <Button onClick={() => submit()} >Consegna</Button>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CastleTest;