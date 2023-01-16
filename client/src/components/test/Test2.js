import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Test2 = (props) => {

    const [answer, setAnswer] = useState(props.testResults.res2);

    useEffect(() => {
        const res = props.testResults;
        res.res2 = answer;
        props.setTestResults(res);
    }, [answer]);

    return (
        <Container>
            {/* 4 buttons */}
            <Row>
                <Col>
                    <Button onClick={() => setAnswer('River')} selected={answer === 'River'}>River</Button>
                </Col>
                <Col>
                    <Button onClick={() => setAnswer('Rabbit')} selected={answer === 'Rabbit'}>Rabbit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => setAnswer('Boat')} selected={answer === 'Boat'}>Boat</Button>
                </Col>
                <Col>
                    <Button onClick={() => setAnswer('Party')} selected={answer === 'Party'}>Party</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Test2;