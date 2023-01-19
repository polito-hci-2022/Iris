import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import RoundButton from "../common/RoundButton";
import API from "../../API"

const Test2 = (props) => {

    const [answer, setAnswer] = useState(props.testResults.Answer2);

    useEffect(() => {
        const res = props.testResults;
        res.Answer2 = answer;
        props.setTestResults(res);
        API.saveTestResults(res.Answer1, res.Answer2);
    }, [answer]);

    return (
        <Container>
            {/* 4 buttons */}
            <Row>
                <Col>
                    <RoundButton
                        onClick={() => setAnswer('RIVER')}
                        disabled={answer === 'RIVER'}
                        dimension={100}
                        text={"RIVER"}
                        top={'20%'}
                        left={'20%'} />
                </Col>
                <Col>
                    <RoundButton
                        onClick={() => setAnswer('RABBIT')}
                        disabled={answer === 'RABBIT'}
                        dimension={100}
                        text={"RABBIT"}
                        top={'20%'} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RoundButton
                        onClick={() => setAnswer('BOAT')}
                        disabled={answer === 'BOAT'}
                        dimension={100}
                        text={"BOAT"}
                        top={'40%'}
                        left={'20%'} />
                </Col>
                <Col>
                    <RoundButton
                        onClick={() => setAnswer('PARTY')}
                        disabled={answer === 'PARTY'}
                        dimension={100}
                        text={"PARTY"}
                        top={'40%'} />
                </Col>
            </Row>
        </Container>
    );
}

//<RoundButton dimension={100} top={'50%'} left={'30%'} link={"/studytime"} title={"Indietro"} text={"Torna indietro"} />

export default Test2;