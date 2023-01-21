import starfull from '../../assets/starfull.png';
import starempty from '../../assets/starempty.png';

const Rating = ({props}) => {
    const ratingString = [];

    for (let i = 0; i < props; i++) {
        ratingString.push(
            <img className="rating-full" src={starfull} alt={'Note sur 5 ' + props}></img>);
    }

    for (let i = props; i < 5; i++) {
        ratingString.push(
            <img className="rating-empty" src={starempty} alt={'Note sur 5' + props}></img>);
    }

    return (
        <div className="rating">
            {ratingString.map((stars, index) => {return <div key={index}>{stars}</div>})}
        </div>
    );
};

export default Rating;