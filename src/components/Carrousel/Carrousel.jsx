import { useState } from 'react';
import previousImg from '../../assets/previous.png'
import nextImg from '../../assets/next.png'

const Carrousel = ({props}) => {
// initialisation de l'etat a 0
    let [currentImg, setCurrentImg] = useState(0);
// modification du state via son setter
    const next = () => {
        setCurrentImg(currentImg = currentImg + 1)
        if (currentImg + 1 > props.length) {
            setCurrentImg(0)
        }
    }

    const previous = () => {
        setCurrentImg(currentImg = currentImg - 1)
        if (currentImg < 0) {
            setCurrentImg(props.length - 1)
        }
    }
// affichage des fleches et du compteurs si plus d'une photo, sinon on les masque via les operateurs logiques &&
    return (
        <div className="carrousel-container">
                <img className='carrousel-img' src={props[currentImg]} alt= 'Carrousel du logement'/>
                {props.length > 1 &&<div className='carrousel-count'>
                {currentImg +1 }
                 / 
                { props.length }
            </div>}
            <button className='previous-btn' onClick={previous}>{props.length > 1 &&
                <img className='previous-img' src={previousImg} alt="Bouton précédent" />}
            </button>
            <button className='next-btn' onClick={next}>{props.length > 1 &&
                <img className='next-img' src={nextImg} alt="Bouton suivant" />}
            </button>
        </div>
    );
};

export default Carrousel;