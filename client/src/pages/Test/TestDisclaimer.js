import { Col, Container, Row } from "react-bootstrap";
import RoundButton from "../../components/common/RoundButton";
import IrisModel from "../../models/IrisModel"
import { Palette } from '../../Palette';

const TestDisclaimer = () => {

    return (
        <Container fluid className="vh-100" style={{ backgroundColor: Palette.backgroundColor }}>
            {/* message */}
            <Row>
                <Col xs={12} style={{ width: '90%' }} className="mt-5 ms-4 ps-2 me-3" >
                    <h2>ATTENZIONE!</h2>
                    <h4>Il test può essere effettuato una sola volta.</h4>
                    <h4>Se esci o consegni non potrai più modificare le tue risposte.</h4>
                    <h4>Vuoi iniziare il test?</h4>
                </Col>
            </Row>

            {/* actions */}
            <Row>
                <Col className="col-6">
                    {/* back button */}
                    <RoundButton dimension={125} top={'40%'} left={'20%'} link={"/studytime"} title={"Back"} text={"Torna indietro"} />

                </Col>
                <Col className="col-6">
                    {/* start test button */}
                    <RoundButton dimension={125} top={'40%'} left={'5%'} link={"/castleTest"} title={"Castle"} text={"Inizia il test"} />
                </Col>
            </Row>

            {/* Iris */}
            <Row>
                <IrisModel scale={4} top={'50%'} left={'25%'} />
            </Row>

        </Container>
    );
}

export default TestDisclaimer;