import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TestReview from "./TestReview";
//import API from '../../API'

const TestDisclaimer = ({ navigation }) => {

    const disclaimerText = "Il test può essere effettuato una sola volta. Se esci o consegni non potrai più modificare le tue risposte."

/*
    useEffect(() => {
        const getData = async () => {
            const results = await API.getTest();
            if (results.done) navigation.navigate(TestReview, { testResults: results });
            return results;
        }
        const res = getData();
    }, []);
*/

    return (
        <>
            {/* message */}
            <Container>
                <h2>ATTENZIONE!</h2>
                <p>{disclaimerText}</p>
                <p>Vuoi iniziare il test?</p>
            </Container>

            {/* actions */}
            <Container>
                <Row>
                    <Col>
                        {/* back button */}
                        <Link to='/studytime'>
                            <Button >Torna indietro</Button>
                        </Link>
                    </Col>
                    <Col>
                        {/* start test button */}
                        <Link to='/castleTest'>
                            <Button>Inizia il test</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TestDisclaimer;