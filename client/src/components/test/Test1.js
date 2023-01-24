import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsFillBackspaceFill } from "react-icons/bs";
import API from "../../API"
import { Palette } from "../../Palette";

const Test1 = (props) => {

    const [answer, setAnswer] = useState(props.testResults.Answer1);

    useEffect(() => {
        const res = props.testResults;
        res.Answer1 = answer;
        props.setTestResults(res);
        API.saveTestResults(res.Answer1, res.Answer2);
    }, [answer]);

    const addLetter = (newLetter) => {
        if (answer.length < 6) {
            const ans = answer + newLetter;
            setAnswer(ans);
        }
    }

    const deleteLetter = () => {
        if (answer.length > 0) {
            const ans = answer.substring(0, answer.length - 1);
            setAnswer(ans);
        }
    }

    const style = { backgroundColor: Palette.tileColor, borderColor: Palette.tileColor, color: Palette.lightColor };

    return (
        <Container>
            <Row>
                {/* Result preview */}
                <Col className="col-2">
                    <Form.Control type="text" value={answer[0] ? answer[0] : ""} readOnly />
                </Col>
                <Col className="col-2">
                    <Form.Control type="text" value={answer[1] ? answer[1] : ""} readOnly />
                </Col>
                <Col className="col-2">
                    <Form.Control type="text" value={answer[2] ? answer[2] : ""} readOnly />
                </Col>
                <Col className="col-2">
                    <Form.Control type="text" value={answer[3] ? answer[3] : ""} readOnly />
                </Col>
                <Col className="col-2">
                    <Form.Control type="text" value={answer[4] ? answer[4] : ""} readOnly />
                </Col>
                <Col className="col-2">
                    <Form.Control type="text" value={answer[5] ? answer[5] : ""} readOnly />
                </Col>
            </Row>
            <Row>
                {/* Letters */}
                <Row>
                    <Col className="col-3" />
                    <Col className="col-2">
                        {/* A */}
                        <Button onClick={() => addLetter('A')} style={style} className="mt-4" >A</Button>
                    </Col>
                    <Col className="col-2" />
                    <Col className="col-2">
                        {/* K */}
                        <Button onClick={() => addLetter('K')} style={style} className="mt-4" >K</Button>
                    </Col>
                    <Col className="col-3" />
                </Row>
                <Row>
                    <Col className="col-2">
                        {/* E */}
                        <Button onClick={() => addLetter('E')} style={style} className="mt-5" >E</Button>
                    </Col>
                    <Col className="col-8" />
                    <Col className="col-2">
                        {/* S */}
                        <Button onClick={() => addLetter('S')} style={style} className="mt-5" >S</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-2">
                        {/* L */}
                        <Button onClick={() => addLetter('L')} style={style} className="mt-5" >L</Button>
                    </Col>
                    <Col className="col-8 justify-item-center">
                        <Button onClick={() => deleteLetter()} style={style} className="ms-5 pe-3" > <BsFillBackspaceFill /> Cancella</Button>
                    </Col>
                    <Col className="col-2">
                        {/* C */}
                        <Button onClick={() => addLetter('C')} style={style} className="mt-5" >C</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-3" />
                    <Col className="col-2">
                        {/* T */}
                        <Button onClick={() => addLetter('T')} style={style} className="mt-5" >T</Button>
                    </Col>
                    <Col className="col-2" />
                    <Col className="col-2">
                        {/* F */}
                        <Button onClick={() => addLetter('F')} style={style} className="mt-5" >F</Button>
                    </Col>
                    <Col className="col-3" />
                </Row>
            </Row>
        </Container>
    );
}

export default Test1;