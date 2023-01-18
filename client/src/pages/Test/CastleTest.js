import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Test1 from '../../components/test/Test1';
import Test2 from '../../components/test/Test2';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../../components/common/RoundButton';
import SquareButton from '../../components/common/SquareButton';

const textQuestion1 = "Come si dice 'CASTELLO' in inglese?";
const textQuestion2 = "Ti ricordi il CONIGLIO che ci ha accompagnati al castello? Come si dice in inglese?";

const CastleTest = (props) => {

    const navigate = useNavigate();

    const [message, setMessage] = useState(textQuestion1);
    const [question1, setQuestion1] = useState(true);

    useEffect(() => {
        //first time entered in the test: the test is considered done
        props.setTest(1);
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
        navigate('/studytime');
    }

    return (
        <Container fluid className="vh-100" style={{ backgroundColor: "#7cb518" }}>
            {/* UPPER PART: Iris, Bubble and Back button */}
            <Container>
                <Row>
                    <Col>
                        <Bubble text={message} />
                        <IrisModel scale={3}  top={'12%'} left={'45%'} />
                        <RoundButton dimension={75}  position={'absolute'} top={'30%'} left={'1%'} link={"/studytime"} title={"Back"} text={"Esci"} />
                    </Col>
                </Row>
            </Container>

            {/* LOWER PART: body */}
            <Container style={{ position:'absolute', top:"42%"}}>
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
                                : <SquareButton onClick={() => moveBack()} text="Indietro" position='absolute' dimension={100} bottom={10} left={'15%'} />
                        }
                    </Col>
                    <Col>
                        {
                            question1
                                ? <SquareButton onClick={() => moveNext()} text="Avanti" position='absolute' dimension={100} bottom={10} left={'60%'} />
                                : <SquareButton onClick={() => submit()} text="Fine" position='absolute' dimension={100} bottom={10} left={'60%'} />
                        }
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default CastleTest;