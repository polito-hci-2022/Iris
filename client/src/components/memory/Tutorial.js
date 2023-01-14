import { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card.js'
import './Game.css'
import RoundButton from '../common/RoundButton.js';

const initialCards = [
  { "src": "/images/bulbasaur.png", matched: false, type: "image", name:"bulbasaur", id: 1},
  { "src": "/images/butterfree.png", matched: false, type: "image", name:"butterfree", id: 2 },
  { "src": "/images/charmander.png", matched: false, type: "image", name:"charmander", id: 3   },
  { "src": "/images/pidgeotto.png", matched: false, type: "image", name:"pidgeotto", id: 4   },
  { "src": "/images/pikachu.png", matched: false, type: "image", name:"pikachu", id: 5 },
  { "src": "/images/squirtle.png", matched: false, type: "image", name:"squirtle", id: 6  },
];

const initialTextCards = [
  { "src": "bulbasaur", matched: false, type: "text", name:"bulbasaur", id: 7},
  { "src": "butterfree", matched: false, type: "text", name:"butterfree", id: 8 },
  { "src": "charmander", matched: false, type: "text", name: "charmander", id: 9 },
  { "src": "pidgeotto", matched: false, type: "text", name: "pidgeotto", id: 10  },
  { "src": "pikachu", matched: false, type: "text", name: "pikachu", id: 11 },
  { "src": "squirtle", matched: false, type: "text", name: "squirtle", id: 12},
];

function Tutorial(props) {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [step,setStep] = useState(0);
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

  function next(){

    setStep(step+1)
    let CARD

    if(step===5){
      navigate("/Memory")
    }

   switch(step){
    case 0:
      CARD = cards.filter(card => card.id==1).map(card => card.matched=true)
      props.setMessage("Prima carta girata");
      break;
    case 1:
      CARD = cards.filter(card => card.id==7).map(card => card.matched=true)
      props.setMessage("Prima coppia trovata!");
      setScore(score+1)
      break;
    case 2:
      CARD = cards.filter(card => card.id==6).map(card => card.matched=true)
      props.setMessage("Ora devi individuare la seconda coppia!");
      break;
    case 3:
      CARD = cards.filter(card => card.id==12).map(card => card.matched=true)
      props.setMessage("Seconda coppia trovata!");
      setScore(score+1)
      break;
    case 4:
      CARD = cards.filter(card => card.matched==false).map(card => card.matched=true)
      props.setMessage("Adesso hai trovato tutte le coppie e hai vinto. Clicca su avanti per iniziare a giocare!");
      setScore(6)
      break;
    default:
      break;
   }

}

  return (
    <div className='container'>
      <RoundButton dimension={75} left={250} title={"Next"} text={"Next"} onClick={() => next()}/>
      <div className="grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipped={card.matched || startFlip}
            matched={card.matched}
          />
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
  );
}

export default Tutorial;