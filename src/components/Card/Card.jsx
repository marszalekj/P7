import { Link } from 'react-router-dom';

const Card = (props) => {

    return (
        <div id='card-container'>
          
            <Link to={`offers/` + props.house.id} className="card-layout" key={props.house.id}>
                <img className='card-cover' src={props.house.cover} alt="" />
                <div className='card-filter'></div>

                <h2 className='card-title'>{props.house.title}</h2>
            </Link>
            
        </div>
    );
};

export default Card;