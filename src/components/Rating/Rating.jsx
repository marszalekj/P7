import starfull from '../../assets/starfull.png';
import starempty from '../../assets/starempty.png';

const Rating = ({props}) => {
// initialisation d'un tableau
    const ratingString = [];
// utilisation des boucles
    for (let i = 0; i < props; i++) {
        ratingString.push(
            <img className="rating-full" src={starfull} alt={'Note sur 5 ' + props}></img>);
    }

    for (let i = props; i < 5; i++) {
        ratingString.push(
            <img className="rating-empty" src={starempty} alt={'Note sur 5' + props}></img>);
    }
// ajout d'une key egale a l'index afin d'avoir un id unique et ne pas generer d'erreur
    return (
        <div className="rating">
            {ratingString.map((stars, index) => {return <div key={index}>{stars}</div>})}
        </div>
    );
};

export default Rating;