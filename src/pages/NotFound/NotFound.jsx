import { NavLink } from "react-router-dom";

const NotFound = () => {
     return (
     <div className='erreur'>
        <h1 className="text-404">404</h1>
        <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
        <p className='retour'><NavLink to = "/" >Retourner sur la page d'accueil</NavLink></p>
    </div>)
 };

export default NotFound;
