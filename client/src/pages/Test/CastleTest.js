import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Test1 from '../../components/test/Test1';
import Test2 from '../../components/test/Test2';
import { useNavigate } from 'react-router-dom';

const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";

const CastleTest = ({ navigation }) => {

    const navigate = useNavigate();

    const [testResults, setTestResults] = useState({
        done: true,
        res1: "",
        res2: ""
    });
    const [message, setMessage] = useState(textQuestion1);
    const [question1, setQuestion1] = useState(true);

    const moveNext = () => {
        //save progresses
        //API.add...
        setMessage(textQuestion2);
        setQuestion1(false);
    }

    const moveBack = () => {
        //save progresses
        //API.add...
        setMessage(textQuestion1);
        setQuestion1(true);
    }

    //this function is called also by the round button used to leave the test
    const submit = () => {
        //save progresses
        //API.add...
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
                        {/*<RoundButton navigation={navigation} />*/}
                    </Col>
                </Row>
            </Container>

            {/* LOWER PART: body */}
            <Container>
                {
                    question1
                        ? <Test1 testResults={testResults} setTestResults={setTestResults} />
                        : <Test2 testResults={testResults} setTestResults={setTestResults} />
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