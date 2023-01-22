// ajout d'une key egale a l'index afin d'avoir un id unique et ne pas generer d'erreur
// utilisation de la methode .map pour recuperer chaque item et chaque index
const Tag = ({props}) => {
    return (
        <div className='tags'>
            {
                props.map((item, index) => {
                    return (<div className="tag" key={index}>{item}</div>)
                })
            }
        </div>
    )
}
export default Tag;