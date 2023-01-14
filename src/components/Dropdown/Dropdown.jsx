import useState from 'react';
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
                    isVisible? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>
                }
                </button>
            </div>
            {isVisible && 
                <div className={isVisible? 'dropdown-content  dropdown-active' : 'dropdown-content'}>
                    {displayProps()}
                </div>
            }
        </div>
    );
}

export default Dropdown;