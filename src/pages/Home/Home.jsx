/*
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Houses from "../houses.json";
import BannerHome from "../assets/backbannerhome.png"

const Home = () => {
    return (
        <main className='home-main'>
            <Banner img={BannerHome}/>
            <div> Oui</div>
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
*/
const Home = () => {
    const titre = "Home"
     return (<h1>{titre}</h1>)
 };

export default Home;

