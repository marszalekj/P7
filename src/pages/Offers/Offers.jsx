import { useParams, Navigate } from "react-router-dom"
import Dropdown from '/Users/jeremy/Documents/Project 7/kasa/src/components/Dropdown/Dropdown.jsx';
import Houses from '/Users/jeremy/Documents/Project 7/kasa/src/houses.json'
import "./Offers.scss"


const Offers = () => {
    
    
    const { id } = useParams();
    const houses = Houses.find((house) => house.id === id);
    if(!houses) {
        return <Navigate to="/404" />
    }

    return (
        <main className="offers-main">
            <div className="offers-header">
                <div className="offers-header_left">
                    <div className="offers-titles">
                        <h1>{houses.title}</h1>
                        <h2>{houses.location}</h2>
                    </div>
                    <div className="offers-tags">
                            {/*<Tag tags={houses.tags}/>*/}
                    </div>
                </div>
                <div className="offers-header_right">
                    <div className="offers-info">
                        <div className="offers-rating">
                        {/*<Rating rating={accommodation.rating}/>*/}

                        </div>
                        <div className="offers-owner">
                            <span>{houses.host.name}</span>
                            <img src={`${houses.host.picture}`} alt="Portrait du Proprietaire" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="offers-dropdowns">
                    <div className="offers-desccription">
                        <Dropdown props={houses.description} title={"description"}/>
                    </div>
                    <div className="offers-equipements">
                        <Dropdown props={houses.equipments}title={"équipements"}/>
                    </div>
            </div>
        </main>
    );
}

export default Offers;