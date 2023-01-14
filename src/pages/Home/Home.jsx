import Banner from "/Users/jeremy/Documents/Project 7/kasa/src/components/Banner/Banner.jsx";
import Card from "/Users/jeremy/Documents/Project 7/kasa/src/components/Card/Card.jsx";
import Houses from "/Users/jeremy/Documents/Project 7/kasa/src/houses.json";
import BannerHome from "/Users/jeremy/Documents/Project 7/kasa/src/assets/backbannerhome.png"
import "./Home.css"

const Home = () => {
    return (
        <main className='home-main'>
            <Banner img={BannerHome} txt={"Chez vous, partout et ailleurs"}/>
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

