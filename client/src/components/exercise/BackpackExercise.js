import { GiBookCover, GiPaintBucket, GiCakeSlice, GiEntryDoor, GiFruitTree, GiPencil } from "react-icons/gi";
import { useEffect, useState } from 'react';
import { Container, Row, Col, Figure, Button, Modal } from 'react-bootstrap';
import backpack from './backpack.png';
import RoundButton from "../common/RoundButton";

const BackpackExercise = (props) => {

    const [finish, setFinish] = useState(false);
    const [state, setState] = useState({
        current: undefined,
        score: 0,
        words: [
            {
                id: 0, word: "BOOK", translated: "un libro", correct: true, state: "standard", image: {
                    name: 'open-book',
                    color: 'green'
                }
            },
            {
                id: 1, word: "BUCKET", translated: "Un secchio", correct: false, state: "standard", image: {
                    name: 'bucket',
                    color: 'red'
                }
            },
            {
                id: 2, word: "CAKE", translated: "Una torta", correct: false, state: "standard", image: {
                    name: 'cake',
                    color: 'red'
                }
            },
            {
                id: 3, word: "DOOR", translated: "Una porta", correct: false, state: "standard", image: {
                    name: 'door',
                    color: 'red'
                }
            },
            {
                id: 4, word: "TREE", translated: "Un albero", correct: false, state: "standard", image: {
                    name: 'tree',
                    color: 'red'
                }
            },
            {
                id: 5, word: "PENCIL", translated: "una matita", correct: true, state: "standard", image: {
                    name: 'edit',
                    color: 'green'
                }
            }
        ]
    });

    const select = (id) => {
        let newState = state;
        newState.words[id].state = "selected";
        if (state.current === id) {
            //click a second time on the same button -> deselect
            newState.current = undefined;
        } else {
            newState.current = id;
            if (newState.words[id].correct) {
                props.setMessage("Sicuramente nello zaino ci servirà " + state.words[id].translated + "!");
                newState.score = state.score + 1;
            } else {
                props.setMessage("No! " + state.words[id].translated + " non può entrare nello zaino!");
            }
        }
        setState(() => newState);
    }

    return (
        <>
            <Container>
                <Row>
                    <Words words={state.words} current={state.current} select={select} />
                </Row>
                <Row>
                    <Col className='col-6'>
                        {
                            state.words[state.current]
                                ? <Current word={state.words[state.current]} />
                                : false
                        }
                    </Col>
                    <Col className="col-6">
                        <Figure>
                            <Figure.Image src={backpack} width={171} height={180} />
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <RoundButton onClick={() => setFinish(true)} dimension={75} title={'Yes'} text={"Fatto"} bottom={"30%"} left={"75%"} />
                </Row>
            </Container>
            <Modal show={finish} className='vw-100'>
                <Modal.Body>
                    Esercizio completato. Hai trovato {state.score}/2 oggetti.
                    <RoundButton dimension={75} link={"/studyTime"} title={"Back"} text={"Esci"} />
                </Modal.Body>
            </Modal>
        </>
    );
}

const Words = (props) => {
    return (
        <Container fluid>
            <Row className='vw-100'>
                <Col className="col-6">
                    <Word word={props.words[0]} current={props.current === 0} select={() => props.select(0)} className="ms-5 my-3" />
                </Col>
                <Col className="col-6">
                    <Word word={props.words[1]} current={props.current === 1} select={() => props.select(1)} className="me-3 my-3" />
                </Col>
            </Row>
            <Row className='vw-100'>
                <Col className="col-6">
                    <Word word={props.words[2]} current={props.current === 2} select={() => props.select(2)} className="ms-2 my-3" />
                </Col>
                <Col className="col-6">
                    <Word word={props.words[3]} current={props.current === 3} select={() => props.select(3)} className="ms-3 my-3" />
                </Col>
            </Row>
            <Row className='vw-100'>
                <Col className="col-6">
                    <Word word={props.words[4]} current={props.current === 4} select={() => props.select(4)} className="ms-3 my-3" />
                </Col>
                <Col className="col-6">
                    <Word word={props.words[5]} current={props.current === 5} select={() => props.select(5)} className="me-1 my-3" />
                </Col>
            </Row>
        </Container>
    );
}

const Word = (props) => {

    const [variant, setVariant] = useState("dark");
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (props.word.state === "selected") {
            if (props.word.correct) {
                setVariant("outline-success");
            } else {
                setVariant("outline-danger");
            }
            if (!props.current) {
                setDisabled(true); //button disabled if the word has already been selected (not if it is currently active)
            }
        }
    }, [props.word.state, props.current, props.word.correct])

    return (
        <Button variant={variant} active={props.current} onClick={() => props.select()} disabled={disabled} className={props.className}>{props.word.word}</Button>
    );

}

const Current = (props) => {

    const image = props.word.image;
    return (
        <Container className="ms-4 mt-4">
            <Img id={props.word.id} color={image.color} />
        </Container>
    );
}

const Img = (props) => {
    switch (props.id) {
        case 0:
            return <GiBookCover color={props.color} size={100} />
        case 1:
            return <GiPaintBucket color={props.color} size={100} />
        case 2:
            return <GiCakeSlice color={props.color} size={100} />
        case 3:
            return <GiEntryDoor color={props.color} size={100} />
        case 4:
            return <GiFruitTree color={props.color} size={100} />
        case 5:
            return <GiPencil color={props.color} size={100} />
        default: break;
    }
}

const buttonStudyCompact = {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "grey",
    marginTop: 0
}

const iconStyle = {
    resizeMode: "contain",
    height: 50,
    width: 50,
}

export default BackpackExercise;