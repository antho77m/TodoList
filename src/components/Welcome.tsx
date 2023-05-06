import { Link } from "react-router-dom";

export function Welcome() {
    return <div className="welcome">
        <div className="content">
        <h1>Bienvenue dans l'application web de TodoList !</h1>
        <p>
            Petit projet personnel réaliser par <strong className="author">Antho77m</strong> <br />
            Technologies utilisées: <br />
            React & SCSS    
        
        </p>

        </div>
    </div>
    
}