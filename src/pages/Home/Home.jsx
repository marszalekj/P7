import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
import Houses from "../../houses.json";
import BannerHome from "../../assets/backbannerhome.png"

// utilisation de la methode .map pour afficher chaque logement ainsi que donner une key via l'id de chaque logement
 
const Home = () => {
    return (
        <main className='home-body'>
            <Banner className="home-banner" img={BannerHome} txt={"Chez vous, partout et ailleurs"}/>
                <div className="gallery">
                    {
                        Houses.map((house) => (
                            <Card key={house.id} house={house} />))
                    }
                </div>
        </main>
    ); 
};


export default Home;

