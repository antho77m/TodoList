import { Link } from "react-router-dom";

export function Header() {
    return <div className="header">
        <div>
            <h1>Todo List !</h1>
        </div> 
        <nav>
            
             <Link to="/list" className="linker"><div>Accéder a la liste</div></Link>
             <Link to="/add" className="linker"><div>Ajouter un nouvel élément</div></Link> 
        </nav>
    </div>
}