import { Link } from 'react-router-dom';
import "./Card.css"

const Card = (props) => {

    return (
        <div id='card-container'>
          
            <Link to={`offers/` + props.house.id} className="card-layout" key={props.house.id}>
                <img className='card-cover' src={props.house.cover} alt="" />
                <h2>{props.house.title}</h2>
            </Link>
            
        </div>
    );
};

export default Card;