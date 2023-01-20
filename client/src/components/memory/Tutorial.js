import { useEffect, useState, } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Card from './Card.js'
import './Game.css'
import RoundButton from '../common/RoundButton.js';

const initialCards = [
  { "src": "/images/candy.jpg", matched: false, type: "image", name: "candy", id: 1 },
  { "src": "/images/dice.png", matched: false, type: "image", name: "dice", id: 2 },
  { "src": "/images/dog.jpg", matched: false, type: "image", name: "dog", id: 3 },
  { "src": "/images/icecream.jpg", matched: false, type: "image", name: "icecream", id: 4 },
  { "src": "/images/tree.jpg", matched: false, type: "image", name: "tree", id: 5 },
  { "src": "/images/flower.png", matched: false, type: "image", name: "flower", id: 6 },
];

const initialTextCards = [
  { "src": "candy", matched: false, type: "text", name: "candy", id: 7 },
  { "src": "dice", matched: false, type: "text", name: "dice", id: 8 },
  { "src": "dog", matched: false, type: "text", name: "dog", id: 9 },
  { "src": "icecream", matched: false, type: "text", name: "icecream", id: 10 },
  { "src": "tree", matched: false, type: "text", name: "tree", id: 11 },
  { "src": "flower", matched: false, type: "text", name: "flower", id: 12 },
];

function Tutorial(props) {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [startFlip, setStartFlip] = useState(true);

  const navigate = useNavigate()

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

    setCards(shuffledCards);
    setStartFlip(true) /* preview griglia memory */
    setTimeout(() => {
      setStartFlip(false)
    }, 3000);
  }

  function next() {

    setStep(step + 1)
    let CARD

    switch (step) {
      case 0:
        CARD = cards.filter(card => card.id === 1).map(card => card.matched = true)
        props.setMessage("Prima carta girata");
        break;
      case 1:
        CARD = cards.filter(card => card.id === 7).map(card => card.matched = true)
        props.setMessage("Prima coppia trovata!");
        setScore(score + 1)
        break;
      case 2:
        CARD = cards.filter(card => card.id === 6).map(card => card.matched = true)
        props.setMessage("Ora devi individuare la seconda coppia!");
        break;
      case 3:
        CARD = cards.filter(card => card.id === 12).map(card => card.matched = true)
        props.setMessage("Seconda coppia trovata!");
        setScore(score + 1)
        break;
      case 4:
        CARD = cards.filter(card => card.matched === false).map(card => card.matched = true)
        props.setMessage("Adesso hai trovato tutte le coppie e hai vinto. Clicca su avanti per iniziare a giocare!");
        setScore(6)
        break;
      default:
        break;
    }

  }

  return (
    <div className='container'>
      <RoundButton dimension={75} left={250} title={"Next"} text={"Avanti"} onClick={step === 5 ? navigate('/memory') : next} bottom={10} />
      <div className="grid ms-3">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipped={card.matched || startFlip}
            matched={card.matched}
          />
        ))}
      </div>
      <RoundButton text={"Score: " + score} top={10} left={15} ></RoundButton>
    </div>
  );
}

export default Tutorial;