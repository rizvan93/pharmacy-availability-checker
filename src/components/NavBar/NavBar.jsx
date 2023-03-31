import { Link } from "react-router-dom"; 

export default function NavBar ({user}) {
    return (
        <div>
        <nav>
             <Link to="/users">Admin</Link>
            &nbsp; | &nbsp;
            <Link to="/stores">Stores</Link>
            &nbsp; | &nbsp;
            <Link to="/medicines">Medicine</Link>
        </nav>
            <p>Welcome, {user}!</p>
        </div>
    )
}