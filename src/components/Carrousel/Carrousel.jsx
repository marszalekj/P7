import { useState } from 'react';
import previousImg from '../../assets/previous.png'
import nextImg from '../../assets/next.png'

const Carrousel = ({props}) => {

    let [currentImg, setCurrentImg] = useState(0);

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

    return (
        <div className="carrousel-container">
                <img className='current-img' src={props[currentImg]} alt= 'Carrousel du logement'/>
            <div className='carrousel-count'>
                {currentImg +1 }
                 / 
                { props.length }
            </div>
            <button className='previous-btn' onClick={previous}>
                <img src={previousImg} alt="Bouton précédent" />
            </button>
            <button className='next-btn' onClick={next}>
                <img src={nextImg} alt="Bouton suivant" />
            </button>
        </div>
    );
};

export default Carrousel;