const Banner = (props) => {
    return (
        <div id="banner-container">
            <img className="banner-cover" src={props.img} alt="Banniere" />
            <div className="banner-text"> 
                <h2>{props.txt}</h2>
            </div>
        </div>
    )

}

export default Banner