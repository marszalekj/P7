import { useParams, Navigate } from "react-router-dom"
import Carrousel from "../../components/Carrousel/Carrousel";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown"
import Houses from '../../houses.json'


const Offers = () => {
    
// utilisation de useParams afin d'afficher la page du logement conrrespondant a l'id    
    const { id } = useParams();
// utilisation de la methode find afin de parcourir les logements et afficher les logements correspondant a l'id, sinon renvoie vers page erreur
    const houses = Houses.find((house) => house.id === id);
    if(!houses) {
        return <Navigate to="/404" />
    }

    return (
        <main className="offers-main">
            <Carrousel className="offers-carrousel" props={houses.pictures}/>
            <div className="offers-header">
                <div className="offers-header-left">
                    <div className="offers-titles">
                        <h1 className="offers-title">{houses.title}</h1>
                        <h2 className="offers-location">{houses.location}</h2>
                    </div>
                    <div className="offers-tags">
                            <Tag props={houses.tags}/>
                    </div>
                </div>
                <div className="offers-header-right">
                    <div className="offers-info">
                    <div className="offers-rating">
                            <Rating props={houses.rating}/>
                    </div>
                        <div className="offers-owner">
                            <div className="owner-name">{houses.host.name}</div>
                            <img className="owner-img" src={`${houses.host.picture}`} alt="Portrait du Proprietaire" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="offers-dropdowns">
                    <div className="offers-description">
                        <Dropdown props={houses.description} title={"Description"}/>
                    </div>
                    <div className="offers-equipements">
                        <Dropdown props={houses.equipments} title={"Equipements"}/>
                    </div>
    </div>
        </main>
    );
}

export default Offers;