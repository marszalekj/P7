const Banner = (props) => {
    return (
        <div id="banner-container">
            <img className="banner-cover" src={props.img} alt="Banniere" />
            <div className="banner-filter"></div>
            <div className="banner-text"> 
                <p >{props.txt}</p>
            </div>
        </div>
    )

}

export default Banner