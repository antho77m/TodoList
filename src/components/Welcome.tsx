import { Link } from "react-router-dom";

export function Welcome() {
    return <div className="Welcome">
        <h1>Bienvenue dans l'application web de TodoList !</h1>
        Réaliser par Antho
        <Link to={"/TodoList"}>Accéder a l'application de TodoList</Link>
    </div>
    
}