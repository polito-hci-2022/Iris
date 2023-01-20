import { useEffect, useState, } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap'
import CardGame from './CardGame.js'
import RoundButton from '../common/RoundButton.js';
import './Game.css'
import SquareButton from '../common/SquareButton.js';

const initialCards = [
  { "src": "/images/candy.jpg", matched: false, type: "image", name: "candy" },
  { "src": "/images/dice.png", matched: false, type: "image", name: "dice" },
  { "src": "/images/dog.jpg", matched: false, type: "image", name: "dog" },
  { "src": "/images/icecream.jpg", matched: false, type: "image", name: "icecream" },
  { "src": "/images/tree.jpg", matched: false, type: "image", name: "tree" },
  { "src": "/images/flower.png", matched: false, type: "image", name: "flower" },
];

const initialTextCards = [
  { "src": "candy", matched: false, type: "text", name: "candy" },
  { "src": "dice", matched: false, type: "text", name: "dice" },
  { "src": "dog", matched: false, type: "text", name: "dog" },
  { "src": "icecream", matched: false, type: "text", name: "icecream" },
  { "src": "tree", matched: false, type: "text", name: "tree" },
  { "src": "flower", matched: false, type: "text", name: "flower" },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(true);
  const [startFlip, setStartFlip] = useState(true);
  const [finish, setFinish] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setStartFlip(false)
    }, 1000);
    shuffleCards();
  }, []);

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...initialCards, ...initialTextCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setDisabled(false)
    setFinish(false)
    setScore(0)
    setStartFlip(true) /* preview griglia memory */
    setTimeout(() => {
      setStartFlip(false)
    }, 1000);
  }


  function handleChoice(card) {
    choiceOne ? (
      choiceOne.id !== card.id && setChoiceTwo(card))
      : setChoiceOne(card)
  }

  function resetTurn() {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.name === choiceTwo.name) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.name === choiceOne.name) {
              setScore(score + 1)
              if (score === 5)
                setFinish(true)
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div>

      <div className="grid mt-5 ms-3">
        {cards.map(card => (
          <CardGame
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
            disabled={disabled}
            matched={card.matched}
          />
        ))}

      </div>
      <Row>
        <Col>
          <RoundButton dimension={75} text={"Score: " + score} top={10} left={15} ></RoundButton>
        </Col>
        <Col>
          <RoundButton dimension={75} left={'48%'} top={10} onClick={shuffleCards} text={'Nuova Partita'}></RoundButton>
        </Col>

      </Row>


      <Modal show={finish} className='vw-100'>
        <Modal.Body>
          Memory completato! Punteggio: {score}
        </Modal.Body>
        <Modal.Footer>
          <RoundButton dimension={75} link={"/play"} title={"Back"} text={"Esci"} />
          <RoundButton dimension={75} onClick={shuffleCards} title={"Memory"} text={"Gioca Ancora"} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Game;