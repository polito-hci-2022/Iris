import { Col, Container, Row } from "react-bootstrap";
import RoundButton from "../../components/common/RoundButton";

const TestDisclaimer = () => {

    const disclaimerText = "Il test può essere effettuato una sola volta. Se esci o consegni non potrai più modificare le tue risposte."

    return (
        <Container fluid className="vh-100" style={{ backgroundColor: "#7cb518" }}>
            {/* message */}
            <Row>
                <Col xs={12} style={{ width: '100%' }}>
                    <h2>ATTENZIONE!</h2>
                    <h4>{disclaimerText}</h4>
                    <h4>Vuoi iniziare il test?</h4>
                </Col>
            </Row>

            {/* actions */}

            <Row>
                <Col className="col-6">
                    {/* back button */}
                    <RoundButton dimension={100} top={'50%'} left={'30%'} link={"/studytime"} title={"Indietro"} text={"Torna indietro"} />

                </Col>
                <Col className="col-6">
                    {/* start test button */}
                    <RoundButton dimension={100} top={'50%'} left={'10%'} link={"/castleTest"} title={"CastleTest"} text={"Inizia il test"} />
                </Col>
            </Row>

        </Container>
    );
}

export default TestDisclaimer;