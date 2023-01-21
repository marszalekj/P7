import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import BannerAbout from "../../assets/backbannerabout.png";


const About = () => {

    const fiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const goodwill = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const xp = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const safety = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <main className='about-main'>
            <Banner className="banner-about" img={BannerAbout} />
            <div className='dropdowns-about'>
                <div className="droplist" ><Dropdown title="Fiabilité" props= {fiability}></Dropdown></div>
                <div className="droplist" ><Dropdown title="Respect" props = {goodwill}></Dropdown></div>
                <div className="droplist" ><Dropdown title="Service" props = {xp}></Dropdown></div>
                <div className="droplist" ><Dropdown title="Sécurité" props = {safety}></Dropdown></div>
            </div>        
        </main>
    ); 
};


export default About;
