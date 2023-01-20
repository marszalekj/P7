import {useState} from 'react';
import vectorbas from "../../assets/Vectorbas.png"
import vectorhaut from "../../assets/Vectorhaut.png"

const Dropdown = ({ props, title} ) => {

    const [isVisible, setIsVisible] = useState(false)
    
    const handleClick = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }
    const displayProps = () => {
        if(typeof props === "object"){
            return (
                <div>
                    {props.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            )
        }else{
            return <p>{props}</p>
        }
    }

    return (
        <div className='dropdown'>
            <div className="dropdown-header">
                <h3 className='dropdown-title' >{title}</h3>
                <button 
                    type='button'
                    onClick={() => handleClick()}
                >{
                    isVisible? <img className='vectorhaut' src={vectorhaut} alt="Replier menu"/> : <img className='vectorbas' src={vectorbas} alt="Derouler menu"/>
                }
                </button>
            </div>
            {isVisible && 
                <div className='dropdown-content'>
                    {displayProps()}
                </div>
}
        </div>
    );
}

export default Dropdown;