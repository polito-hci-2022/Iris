import { useEffect, useState, } from 'react';
import CardGame from './CardGame.js'
import './Game.css'

const initialCards = [
  { "src": "/images/bulbasaur.png", matched: false, type: "image", name:"bulbasaur"},
  { "src": "/images/butterfree.png", matched: false, type: "image", name:"butterfree" },
  { "src": "/images/charmander.png", matched: false, type: "image", name:"charmander"   },
  { "src": "/images/pidgeotto.png", matched: false, type: "image", name:"pidgeotto"   },
  { "src": "/images/pikachu.png", matched: false, type: "image", name:"pikachu" },
  { "src": "/images/squirtle.png", matched: false, type: "image", name:"squirtle"  },
];

const initialTextCards = [
  { "src": "bulbasaur", matched: false, type: "text", name:"bulbasaur"},
  { "src": "butterfree", matched: false, type: "text", name:"butterfree" },
  { "src": "charmander", matched: false, type: "text", name: "charmander" },
  { "src": "pidgeotto", matched: false, type: "text", name: "pidgeotto"  },
  { "src": "pikachu", matched: false, type: "text", name: "pikachu"  },
  { "src": "squirtle", matched: false, type: "text", name: "squirtle"},
];

function Game() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(true);
  const [startFlip, setStartFlip] = useState(true);

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
      .map((card) => ({ ...card, id: Math.random()}));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setDisabled(false)
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
    <div className='container'>
      <button onClick={shuffleCards}>New Game</button>
      <div className="grid">
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
      <p>Score: {score}</p>
    </div>
  );
}

export default Game;