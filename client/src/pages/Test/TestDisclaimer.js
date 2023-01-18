import { Col, Container, Row } from "react-bootstrap";
import RoundButton from "../../components/common/RoundButton";

const TestDisclaimer = () => {

    const disclaimerText = "Il test può essere effettuato una sola volta. Se esci o consegni non potrai più modificare le tue risposte."

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
                        <RoundButton dimension={100} link={"/studytime"} title={"Indietro"} text={"Torna indietro"} />

                    </Col>
                    <Col>
                        {/* start test button */}
                        <RoundButton dimension={100} link={"/castleTest"} title={"CastleTest"} text={"Inizia il test"} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TestDisclaimer;