import { Link } from "react-router-dom";

export function Header() {
    return <div className="header">
        <div>
            <h1>Todo List !</h1>
        </div> 
        <nav>
            <div> <Link to="/list">Accéder a la liste</Link></div>
            <div> <Link to="/add">Ajouter un nouvel élément</Link> </div>
        </nav>
    </div>
}