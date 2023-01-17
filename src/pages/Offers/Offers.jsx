import { useParams, Navigate } from "react-router-dom"
import Carrousel from "../../components/Carrousel/Carrousel";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown"
import Houses from '/Users/jeremy/Documents/Project 7/kasa/src/houses.json'


const Offers = () => {
    
    
    const { id } = useParams();
    const houses = Houses.find((house) => house.id === id);
    if(!houses) {
        return <Navigate to="/404" />
    }

    return (
        <main className="offers-main">
            <Carrousel props={houses.pictures}/>
            <div className="offers-header">
                <div className="offers-header_left">
                    <div className="offers-titles">
                        <h1>{houses.title}</h1>
                        <h2>{houses.location}</h2>
                    </div>
                    <div className="offers-tags">
                            <Tag props={houses.tags}/>
                    </div>
                </div>
                <div className="offers-header_right">
                    <div className="offers-info">
                        <div className="offers-owner">
                            <div>{houses.host.name}</div>
                            <img src={`${houses.host.picture}`} alt="Portrait du Proprietaire" />
                            <div className="offers-rating">
                            <Rating props={houses.rating}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="offers-dropdowns">
                    <div className="offers-desccription">
                        <Dropdown props={houses.description} title={"Description"}/>
                    </div>
                    <div className="offers-equipements">
                        <Dropdown props={houses.equipments} title={"Equipements"}/>
                    </div>
    </div>*/}
        </main>
    );
}

export default Offers;