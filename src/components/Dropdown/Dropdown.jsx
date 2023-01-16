import useState from 'react';
import vectorbas from "../../assets/Vectorbas.png"
import vectorhaut from "../../assets/Vectorhaut.png"
import "./Dropdown.scss"

const Dropdown = ({ props, title }) => {

    const [isVisible, setIsVisible] = useState(false)
    
    const handleClick = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }
    const displayProps = () => {
        if(typeof props === "object"){
            return (
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        }else{
            return <p>{props}</p>
        }
    }

    return (
        <div className='dropdown'>
            <div className="dropdown-head">
                <h3>{title}</h3>
                <button 
                    type='button'
                    onClick={() => handleClick()}
                >{
                    isVisible? <img src={vectorhaut} alt="Replier menu"/> : <img src={vectorbas} alt="Derouler menu"/>
                }
                </button>
            </div>
            
                <div >
                    {displayProps()}
                </div>
            
        </div>
    );
}

export default Dropdown;