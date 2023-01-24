import './Card.css';
import { Image } from 'react-bootstrap';

function CardGame(props) {

    function handleChoice() {
        if (!props.disabled)
            props.handleChoice(props.card);
    }
    return (
        <div className='card'>
            <div className={props.flipped ? "flipped" : ""}>
              {props.card.type === "image" ?
               <Image className={`front ${props.card.matched ? "matched" : ''}`} src={props.card.src} alt="card front" />
              : <div>
                  <h6 className={`front ${props.card.matched ? "matched py-4 px-3" : 'py-4 px-3'}`} >{props.card.src}</h6>
                </div>}
                <Image className='back' src="/images/card_back.jpg" alt="card back" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}

export default CardGame;